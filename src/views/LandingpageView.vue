<script>
import Navbar from "@/components/NavbarHeader.vue";
import Cards from "@/components/Cards.vue";
import Header_Landingpage from "@/components/Header_Landingpage.vue";

export default {
  name: "LandingpageView",
  components: {
    Header_Landingpage,
    Navbar,
    Cards
  }
}
</script>

<template>
  <b-container fluid class="text-center">
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="8">
  <Header_Landingpage />
  <Cards></Cards>
      </b-col>

    </b-row>
  </b-container>
</template>

<style scoped>

</style>