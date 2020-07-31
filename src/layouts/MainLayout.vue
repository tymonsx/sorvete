<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <img src="~assets/logo_sorvete.png" alt="Logo Sorvete" id="logoSorvete" clickable v-ripple @click="$router.replace('/')"/>
        <q-toolbar-title id="tituloGeral" clickable v-ripple @click="$router.replace('/')">
          App Teste Sorvete
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
