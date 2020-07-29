(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "8b24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=template&id=39882114&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"flex flex-center"},[_c('SorveteVenda')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=template&id=39882114&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SorveteVenda.vue?vue&type=template&id=237ca999&
var SorveteVendavue_type_template_id_237ca999_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"train-controls"},[_c('div',{staticClass:"text-center"},[_vm._m(0),_vm._v("\n      Temperatura em Celcius"),_c('br'),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.valueToPredict),expression:"valueToPredict"}],staticClass:"field element",attrs:{"type":"number","placeholder":"digite um inteiro"},domProps:{"value":(_vm.valueToPredict)},on:{"input":function($event){if($event.target.composing){ return; }_vm.valueToPredict=$event.target.value}}}),_c('div',{staticClass:"element"},[_vm._v(_vm._s(_vm.predictedValue))]),_c('a',{attrs:{"href":"model/model.json"}},[_vm._v(" teste")]),_c('button',{staticClass:"element button--green",on:{"click":_vm.teste}},[_vm._v("teste")]),_c('button',{staticClass:"element button--green",on:{"click":_vm.predict}},[_vm._v("\n        Predizer Vendas\n      ")])])])])}
var SorveteVendavue_type_template_id_237ca999_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-bold"},[_vm._v("\n        Vendas de Sorvetes"),_c('br'),_c('img',{staticStyle:{"height":"100px","width":"100px"},attrs:{"src":__webpack_require__("e837")}})])}]


// CONCATENATED MODULE: ./src/components/SorveteVenda.vue?vue&type=template&id=237ca999&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("c973");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@tensorflow/tfjs/dist/index.js + 220 modules
var dist = __webpack_require__("ce1a");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SorveteVenda.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import "whatwg-fetch";
//import jsonModel from "assets/model/model.json";

/* harmony default export */ var SorveteVendavue_type_script_lang_js_ = ({
  data() {
    return {
      predictedValue: "Clique em Predizer Vendas",
      valueToPredict: "",
      model: dist["b" /* sequential */]()
    };
  },

  mounted() {//this.carregar_modelo();
  },

  methods: {
    carregar_modelo() {
      var _this = this;

      return asyncToGenerator_default()(function* () {
        //this.model = tf.sequential();
        if (_this.$q.platform.is.android) {
          try {
            //super.loadUrl("/modelo/model.json");
            _this.model = yield dist["a" /* loadLayersModel */]("model/model.json"); //this.model = await tf.models.modelFromJSON(jsonModel);
          } catch (error) {
            alert(error);
          }
        } else {
          _this.model = yield dist["a" /* loadLayersModel */]("model/model.json");
        } //this.model = await tf.models.modelFromJSON(jsonModel);

      })();
    },

    predict() {
      let valor = this.model.predict(dist["c" /* tensor2d */]([this.valueToPredict], [1, 1], "float32"));
      this.predictedValue = "R$" + Number(valor.dataSync()).toFixed(2);
    },

    teste() {
      return asyncToGenerator_default()(function* () {
        try {
          let teste = yield fetch("model/model.json");
        } catch (error) {
          alert(error);
        }

        let teste2 = JSON.stringify(yield teste.json());
        console.log(teste2);
        alert(teste2);
      })();
    }

  }
});
// CONCATENATED MODULE: ./src/components/SorveteVenda.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SorveteVendavue_type_script_lang_js_ = (SorveteVendavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/SorveteVenda.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SorveteVendavue_type_script_lang_js_,
  SorveteVendavue_type_template_id_237ca999_render,
  SorveteVendavue_type_template_id_237ca999_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SorveteVenda = (component.exports);
// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: "PageIndex",
  components: {
    SorveteVenda: SorveteVenda
  }
});
// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/Index.vue





/* normalize component */

var Index_component = Object(componentNormalizer["a" /* default */])(
  pages_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (Index_component.exports);


runtime_auto_import_default()(Index_component, 'components', {QPage: QPage["a" /* default */]});


/***/ }),

/***/ "e837":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sorvete.png";

/***/ })

}]);
//# sourceMappingURL=2.js.map