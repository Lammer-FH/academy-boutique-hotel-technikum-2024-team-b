<script setup>
import NavbarHeader from "@/components/NavbarHeader.vue";
</script>

<template>
  <NavbarHeader></NavbarHeader>
  <RouterView id="router"/>
</template>

<style scoped>
#router{
  margin-top: 3rem;
}
</style>
