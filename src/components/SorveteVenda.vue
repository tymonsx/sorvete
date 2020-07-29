<template>
  <div>
    <div class="train-controls">
      <div class="text-center">
        <div class="text-bold">
          Vendas de Sorvetes<br />
          <img src="~assets/sorvete.png" style="height: 100px; width:100px" />
        </div>
        Temperatura em Celcius<br />
        <input
          class="field element"
          v-model="valueToPredict"
          type="number"
          placeholder="digite um inteiro"
        />
        <div class="element">{{ predictedValue }}</div>
        <button class="element button--green" v-on:click="predict">
          Predizer Vendas
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import * as tf from "@tensorflow/tfjs";
import { fetch as fetchPolyfill } from "whatwg-fetch";

export default {
  data() {
    return {
      predictedValue: "Clique em Predizer Vendas",
      valueToPredict: "",
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
    predict() {
      let valor = this.model.predict(
        tf.tensor2d([this.valueToPredict], [1, 1], "float32")
      );

      this.predictedValue = "R$" + Number(valor.dataSync()).toFixed(2);
    }
  }
};
</script>
