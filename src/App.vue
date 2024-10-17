<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import CardLandingPage from "@/components/CardLandingPage.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
      <NavBar></NavBar>
      <card-landing-page></card-landing-page>
</template>

<style scoped>
</style>
