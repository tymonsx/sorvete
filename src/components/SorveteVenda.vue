<template>
  <q-page class="full-height q-pa-xs q-gutter-sm">
    <img
      :style="
        $q.screen.width > 750
          ? 'display: block; margin-left:auto; margin-right:auto; width: 30%;'
          : 'display: block; margin-left:auto; margin-right:auto; width: 70%;'
      "
      src="~assets/imagem_sorvete.jpg"
    />
    <q-input
      class="text-dark"
      :style="
        $q.screen.width > 750
          ? 'width:98.5%;margin-left:0.5%;'
          : 'width:97%; margin-left:2%;'
      "
      maxlength="5"
      v-model="valorTemperatura"
      label="Temperatura em Celsius"
    />
    <div class="q-pa-lg q-gutter-md text-center">
      <q-btn
        id="botaoPredizerLucro"
        color="primary"
        label="Predizer Lucro"
        v-on:click="predizerLucroVendas"
      />
      <q-btn
        id="botaoLimparCampos"
        color="primary"
        label="Limpar Campos"
        v-on:click="limparCampos"
      />
    </div>

    <p class="text-h5 text-primary text-center text-bold">
      Valor do Lucro: {{ valorPreditoLucro }}
    </p>
  </q-page>
</template>
<script>
import * as tf from "@tensorflow/tfjs";
import { fetch as fetchPolyfill } from "whatwg-fetch";
import { Dialog } from "quasar";

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
      this.model = await tf.loadLayersModel("model/model.json");
    },
    predizerLucroVendas() {
      if (this.valorTemperatura == "") {
        this.popup(
          "Temperatura Nula",
          'O campo "valor da temperatura" está nulo'
        );
      } else if (
        this.valorTemperatura > 60 ||
        this.valorTemperatura < -90 ||
        isNaN(this.valorTemperatura)
      ) {
        this.popup(
          "Temperatura Inválida",
          "Temperaturas maiores que 60ºC ou menores que -90ºC não são aceitas"
        );
        this.limparCampos();
      } else {
        let valor = this.model.predict(
          tf.tensor2d([this.valorTemperatura], [1, 1], "float32")
        );

        this.valorPreditoLucro = "R$ " + Number(valor.dataSync()).toFixed(2);
      }
    },
    limparCampos() {
      this.valorTemperatura = "";
      this.valorPreditoLucro = "";
    },
    popup(titulo, msg) {
      this.$q
        .dialog({
          title: titulo,
          message: msg
        })
        .onOk(() => {});

      this.limparCampos();
    }
  }
};
</script>
