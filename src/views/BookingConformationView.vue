<script>

import GettingHere from "@/components/Statics/GettingHere.vue";
import BookingConfirmation from "@/components/Booking/BookingConfirmation.vue";
import router from "@/router";

export default {
  name: "BookingConformationView",
  components: {GettingHere, BookingConfirmation},
methods: {

  handlePrint() {
    window.print();
  },
  goToHomepage() {
    router.push('/home');
  }
}

}
</script>

<template>
  <BookingConfirmation/>
  <GettingHere/>
  <div class="button-container mt-4">
    <b-button size="lg" variant="primary" @click="handlePrint">Drucken</b-button>
    <b-button size="lg" variant="secondary" @click="goToHomepage" class="ms-3">Startseite</b-button>
  </div>
</template>


<style>
@media (min-width: 1024px) {
}

.button-container {
  text-align: center;
}
</style>