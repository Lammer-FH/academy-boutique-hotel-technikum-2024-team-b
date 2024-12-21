<script setup>
import NavbarHeader from "@/components/Statics/NavbarHeader.vue";
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
