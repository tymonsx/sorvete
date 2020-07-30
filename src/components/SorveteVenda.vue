<template>
  <q-layout class="layoutPagina">
      <img id="imagemSorvete" src="~assets/imagem_sorvete.jpg" />
      <q-input class="field element text-dark" maxlength="3" v-model="valorTemperatura" label="Temperatura em Celsius" placeholder="Digite a temperatura..." @reset="limparCampos" />
      <q-input class="field element text-dark" v-model="valorPreditoLucro" label="Valor do Lucro" readonly/>

      <div class="layoutBotoes">
        <q-btn id="botaoPredizerLucro" color="primary" label="Predizer Lucro" v-on:click="predizerLucroVendas" />
        <q-btn id="botaoLimparCampos" color="primary" label="Limpar Campos" v-on:click="limparCampos" />
      </div>
  </q-layout>
</template>
<script>
import * as tf from "@tensorflow/tfjs";
import { fetch as fetchPolyfill } from "whatwg-fetch";
import { Dialog } from 'quasar'

export default {
  data() {
    return {
      valorPreditoLucro: "",
      valorTemperatura: "",
      model: tf.sequential()
    };
  },
  mounted() {
    try {
      window.fetch = fetchPolyfill;
      this.carregar_modelo();
    } catch (error) {
      alert(error);
    }
  },
  methods: {
    async carregar_modelo() {
      if (this.$q.platform.is.android) {
        try {
          this.model = await tf.loadLayersModel("model/model.json");
        } catch (error) {
          alert(error);
        }
      } else {
        this.model = await tf.loadLayersModel("model/model.json");
      }
    },
    predizerLucroVendas() {

      if(this.valorTemperatura == "") {
        this.popupTemperaturaNula();
      }
      else if(this.valorTemperatura >60 || this.valorTemperatura < -90) {
        this.popupTemperaturasInvalidas();
        this.limparCampos();
      }
      else {
        let valor = this.model.predict(
        tf.tensor2d([this.valorTemperatura], [1, 1], "float32")
      );

      this.valorPreditoLucro = "R$ " + Number(valor.dataSync()).toFixed(2);
      }
    },
    limparCampos() {
      this.valorTemperatura="";
      this.valorPreditoLucro="";
    },
    popupTemperaturaNula(){
      this.$q.dialog({
        title: 'Temperatura Nula',
        message: 'O campo "valor da temperatura" está nulo'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
      this.limparCampos();
    },
    popupTemperaturasInvalidas() {
      this.$q.dialog({
        title: 'Temperatura Inválida',
        message: 'Temperaturas maiores que 60ºC ou menores que -90ºC não são aceitas.'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
      this.limparCampos();
    }
  }
};
</script>
