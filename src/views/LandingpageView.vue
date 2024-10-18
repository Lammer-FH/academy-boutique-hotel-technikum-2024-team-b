<script>
import Navbar from "@/components/Navbar.vue";
import CardsLandingPage from "@/components/CardsLandingPage.vue";
import {BContainer} from "bootstrap-vue-3";

export default {
  name: "LandingpageView",
  components: {
    BContainer,
    Navbar,
    CardsLandingPage
  }
}
</script>

<template>
      <CardsLandingPage></CardsLandingPage>
</template>

<style scoped>

</style>