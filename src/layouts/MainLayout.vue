<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <img src="~assets/logo_sorvete.jpg" alt="Logo Sorvete" id="logoSorvete" clickable v-ripple @click="$router.replace('/')"/>
        <q-toolbar-title id="titutloGeral" clickable v-ripple @click="$router.replace('/')">
          Aplicativo Teste Sorvete
        </q-toolbar-title>
        <q-btn id="botaoSobre" icon="info" to="/sobre" flat />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
//import EssentialLink from "components/EssentialLink.vue";

export default {
  name: "MainLayout"
};
</script>
