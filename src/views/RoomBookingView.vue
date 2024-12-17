<script>
import RoomBooking from "@/components/Booking/RoomBooking.vue";

export default {
  name: "RoomBookingView",
  components: {RoomBooking},
}

</script>

<template>
  <b-breadcrumb :items="breadcrumpItems" class="mt-5"></b-breadcrumb>
  <RoomBooking/>
</template>

<style scoped>

</style>