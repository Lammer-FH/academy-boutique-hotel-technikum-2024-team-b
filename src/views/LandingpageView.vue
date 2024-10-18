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
  <b-row>
    <b-col lg="10">
      <CardsLandingPage></CardsLandingPage>
    </b-col>
  </b-row>
</template>

<style scoped>

</style>