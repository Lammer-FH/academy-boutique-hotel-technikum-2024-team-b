<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar></Navbar>
  <RouterView id="router"/>
</template>

<style scoped>
#router{
  margin-top: 3rem;
}
</style>
