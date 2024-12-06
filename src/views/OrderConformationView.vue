<script>
import ErrorPost from "@/components/StaticPagesAndNavbar/ErrorPost.vue";
import {useBookingStore} from "@/stores/BookingStore";
import {BContainer} from "bootstrap-vue-3";
import OrderConformation from "@/components/Booking/OrderConformation.vue";

export default {
  name: "OrderConformationView",
  components: {OrderConformation, BContainer, ErrorPost},
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
        <OrderConformation/>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>

</style>