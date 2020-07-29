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
        <a href="model/model.json"> teste</a>

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
//import "whatwg-fetch";

//import jsonModel from "assets/model/model.json";
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
      //this.model = tf.sequential();

      if (this.$q.platform.is.android) {
        try {
          //super.loadUrl("/modelo/model.json");
          this.model = await tf.loadLayersModel("model/model.json");
          //this.model = await tf.models.modelFromJSON(jsonModel);
        } catch (error) {
          alert(error);
        }
      } else {
        this.model = await tf.loadLayersModel("model/model.json");
      }
      //this.model = await tf.models.modelFromJSON(jsonModel);
    },
    predict() {
      let valor = this.model.predict(
        tf.tensor2d([this.valueToPredict], [1, 1], "float32")
      );

      this.predictedValue = "R$" + Number(valor.dataSync()).toFixed(2);
    },
    async teste() {
      try {
        //let teste = await fetch("file:///andoid_asset/www/model/model.json");
        var teste = await fetch("model/model.json");
        /*
        this.readfromwww(
          "application/json",
          "model/model.json",
          filecontent => {
            console.log("OLE! INTO THE FILE: ", filecontent);
            alert(filecontent);
            //not filecontent is the content of your file but... remember... the contents is loaded via ajax, isn't easy to storize it out this function.
          }
        );
        */
      } catch (error) {
        alert(error);
      }
      let teste2 = JSON.stringify(await teste.json());
      //console.log(teste2);
      alert(teste2);
    },
    readfromwww(_mimetype, _filename, callback) {
      var request = new XMLHttpRequest();
      request.overrideMimeType(_mimetype);
      request.open("GET", _filename);
      request.onreadystatechange = () => {
        if (request.status > 300) {
          if (rs == 404) alert("file not found in www: " + request.status);
          else alert("error on request: " + request.status);
        } else if (
          request.responseText != undefined &&
          request.responseText != ""
        ) {
          //from json string to js obj content
          if (_mimetype == "application/json") {
            console.log(request);
            //callback(JSON.parse(request.responseText));
            callback(request.responseURL);
            //return string into your file
          } else {
            callback(request.responseText);
          }
        }
      };
      request.send();
    }
  }
};
</script>
