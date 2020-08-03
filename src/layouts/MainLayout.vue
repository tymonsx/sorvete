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

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div style="min-width:40px;width:10%; float:left; ">
            <img style="margin-top: 5px; " width="40px" src="~assets/epm.png" />
          </div>
          <div
            class="text-right"
            style="min-width:75px; width:10%;float:right;"
          >
            <img
              style="margin-top: 5px; "
              width="75px"
              src="~assets/logo_unifesp.png"
            />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
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
