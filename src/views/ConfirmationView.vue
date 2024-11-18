<script>
import Confirmation from "@/components/AvailabilityAndConformation/Confirmation.vue";
import ErrorPost from "@/components/StaticPagesAndNavbar/ErrorPost.vue";
import {useBookingStore} from "@/stores/BookingStore";
import {BContainer} from "bootstrap-vue-3";

export default {
  name: "ConfirmationView",
  components: {BContainer, ErrorPost, Confirmation},
  data() {
    return {
      bookingData: useBookingStore()
    }
  }
}
</script>

<template>
  <b-container fluid class="text-center">
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <confirmation v-if="bookingData.isSentToBackend === true"/>
        <ErrorPost v-if="bookingData.isSentToBackend === false"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>

</style>