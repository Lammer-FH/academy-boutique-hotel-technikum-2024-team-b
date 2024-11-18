<script>
import RoomBooking from "@/components/Booking/RoomBooking.vue";
import {useBookingStore} from "@/stores/BookingStore";

export default {
  name: "RoomBookingView",
  components: {RoomBooking},
  data() {
    return {
      bookingData: useBookingStore()
    }
  }
}
</script>

<template>
  <RoomBooking/>
</template>

<style scoped>

</style>