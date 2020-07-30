<template>
  <q-layout class="layoutPaginaSobre">
    <q-list id="listaSobre">
      <q-expansion-item
        label="Fonte do modelo"
        group="sobre"
        class="bg-secondary"
      >
        <q-card>
            <q-card-section class="text-dark text-justify">
               <p>O <b>"Aplicativo Teste Sorvete"</b> baseia-se no modelo apresentado na <b>"Seção 2: Construção do primeiro perceptron"</b> do curso <b>"Deep Learning Prático com TensorFlow e Python"</b> disponível na plataforma Udemy.</p><p> O curso foi elaborado pelos seguintes professores: Jones Granatyr, Dr. Ryan Ahmed, Hadelin de Ponteves, Kirill Eremenko, SuperDataScience Team e Mitchell Bouchard.</p>
            </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        label="Imagens Utilizadas"
        group="sobre"
      >
        <q-card>
            <q-card-section class="text-dark text-justify">
                <p>O logo presente no canto superior direito do aplicativo e na tela de carregamento foi elaborado pelo usuário <b>"sceneit"</b> e está disponível no site <b>Vecteezy</b> através dos links <a href="#" v-on:click="abrirLink('https://pt.vecteezy.com/vetor-gratis/creme')">Creme Vetores por Vecteezy</a> e <a href="#" v-on:click="abrirLink('https://pt.vecteezy.com/arte-vetorial/181841-vector-do-logotipo-da-loja-de-cone-de-sorvete')">Vector do Logotipo da Loja de Cone de Sorvete</a></p>
                <p>A imagem de sorvete presente na home do aplicativo foi elaborada pelo usuário <b>"binamg"</b> e está disponível no site <b>Pixaby</b> através do link <a href="#" v-on:click="abrirLink('https://pixabay.com/photos/bowl-ice-cream-ice-dessert-scoops-1932375')">Bowl Ice Cream</a></p>
            </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        label="Processo de Criação"
        group="sobre"
        class="bg-secondary"
      >
        <q-card>
            <q-card-section class="text-dark text-justify">
                <p>O aplicativo foi elaborado utilizando as seguintes ferramentas e bibliotecas: Python, TensorflowJS, Tensorflow, Quasar, Vue, Cordova e Anaconda.</p>
                <p>A primeira etapa do projeto foi o treinamento da rede neural em Python utilizando o Tensorflow. O próximo passo foi o treinamento do modelo salvo em formato h5. Na terceira etapa, o modelo foi convertido para JSON através do TensorflowJS (comando <b>"tensorflowjs_wizard"</b>). Por último, o projeto foi importado para o Quasar utilizando o VueJS.</p>
                <p>O modelo salvo em formato h5 está disponível para consulta através do link <a href="#" v-on:click="abrirLink('https://github.com/tymonsx/sorvete_python')">Modelo H5</a></p>
                <p>O projeto no Quasar está disponível para consulta através do link <a href="#" v-on:click="abrirLink('https://github.com/tymonsx/sorvete')">Projeto Quasar</a></p>
                <p>A disponibilização dos arquivos no Github bem como a supervisão da elaboração do projeto foi realizada pelo <b>Sr. Antônio Carlos da Silva Júnior</b>, Analista de Tecnologia da Informação no Departamento de Informática em Saúde da UNIFESP.</p> 
            </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "Sobre",

  methods: {
    abrirLink(url) {
      openURL(url);
    }
  }
};
</script>