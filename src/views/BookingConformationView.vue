<script>

import GettingHere from "@/components/Statics/GettingHere.vue";
import BookingConfirmation from "@/components/Booking/BookingConfirmation.vue";
import router from "@/router";
import {BContainer} from "bootstrap-vue-3";

export default {
  name: "BookingConformationView",
  components: {BContainer, GettingHere, BookingConfirmation},
methods: {

  handlePrint() {
    window.print();
  },
  goToHomepage() {
    router.push('/');
  }
}
}
</script>

<template>
  <b-container fluid class="text-center">
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
  <BookingConfirmation/>
  <GettingHere/>
  <div class="button-container mt-4">
    <b-button size="lg" variant="primary" @click="handlePrint">Drucken</b-button>
    <b-button size="lg" variant="secondary" @click="goToHomepage" class="ms-3">Startseite</b-button>
  </div>
      </b-col>
    </b-row>
  </b-container>
</template>


<style>
@media (min-width: 1024px) {
}

.button-container {
  text-align: center;
}
</style>