<template>
  <q-page class="flex flex-center">
    <div class="full-width row">
      <img
        class="estiloImgHome col-xs-8 col-sm-5 col-md-4 col-lg-3 col-xl-3"
        src="~assets/imagem_sorvete.jpg"
      />
    </div>
    <q-form
      @submit.stop="predizerLucroVendas"
      @reset="limparCampos"
      class="full-width"
    >
      <div class="row flex flex-center">
        <q-input
          class="text-dark col-xs-8 col-sm-5 col-md-4 col-lg-3 col-xl-3"
          maxlength="5"
          v-model="valorTemperatura"
          label="Temperatura em Celsius"
          ref="temperatura"
          @input="permitirSomenteNumeros"
          :rules="[
            val =>
              (val != '' && val != null) ||
              'A temperatura não pode ser nula nem menor do que 0º C'
          ]"
        />
      </div>
      <div class="q-mt-sm q-gutter-md text-center">
        <q-btn
          id="botaoPredizerLucro"
          color="primary"
          label="Predizer Lucro"
          type="submit"
        />
        <q-btn
          id="botaoLimparCampos"
          color="primary"
          label="Limpar Campos"
          type="reset"
        />
      </div>
    </q-form>
    <p class="text-h5 text-primary text-center text-bold">
      Valor do Lucro: {{ valorPreditoLucro }}
    </p>
  </q-page>
</template>
<style scoped>
.estiloImgHome {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
<script>
import * as tf from "@tensorflow/tfjs";
import { fetch as fetchPolyfill } from "whatwg-fetch";
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
      this.carregarModelo();
    } catch (error) {
      alert(error);
    }
  },
  methods: {
    async carregarModelo() {
      this.model = await tf.loadLayersModel("model/model.json");
    },
    predizerLucroVendas() {
      this.valorTemperatura = String(this.valorTemperatura).replace(",", ".");

      let valor = this.model.predict(
        tf.tensor2d([this.valorTemperatura], [1, 1], "float32")
      );

      this.valorPreditoLucro = Number(valor.dataSync()).toFixed(2);

      this.valorPreditoLucro =
        "R$ " + Number(this.valorPreditoLucro).toLocaleString("pt-BR");

      this.valorTemperatura = Number(this.valorTemperatura).toLocaleString(
        "pt-BR"
      );
    },
    permitirSomenteNumeros() {
      let temporaria = this.valorTemperatura.substring(
        0,
        this.valorTemperatura.length - 1
      );
      let expressaoRegular = /^[0-9,]*$/;

      if (!expressaoRegular.test(this.valorTemperatura.slice(-1))) {
        this.valorTemperatura = temporaria;
        this.$refs.temperatura.$forceUpdate();
      }
    },
    limparCampos() {
      this.valorTemperatura = "";
      this.valorPreditoLucro = "";
    }
  }
};
</script>
