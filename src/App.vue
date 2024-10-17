<template>
  <div id="app">
    <AppNavbar />
    <h1>Welcome to the Academy Boutique Hotel</h1>
    <AppImpressum/>
    <router-view />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,

  },
}
</script>
