<script>
import GettingHere from "@/components/GettingHere.vue";

export default {
  name: "GettingHereView",
  components: {GettingHere}
}
</script>

<template>
  <main>
    <GettingHere />
  </main>

</template>

<style scoped>

</style>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>