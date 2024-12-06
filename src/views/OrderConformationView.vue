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
  <OrderConformation/>
</template>

<style scoped>

</style>