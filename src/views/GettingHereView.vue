<script>
import GettingHere from "@/components/Statics/GettingHere.vue";
import {BContainer} from "bootstrap-vue-3";

export default {
  name: "GettingHereView",
  components: {BContainer, GettingHere}
}
</script>

<template>
  <b-container fluid class="text-center">
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
    <GettingHere/>
      </b-col>
    </b-row>
  </b-container>
</template>


<style>
@media (min-width: 1024px) {
}
</style>