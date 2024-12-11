<script>
import RoomDetailsBasicInfo from "@/components/RoomDetails/RoomDetailsBasicInfo.vue";
import {useBookingStore} from "@/stores/BookingStore";
import {BContainer} from "bootstrap-vue-3";

export default {
  name: "BookingConfirmation",
  components: {BContainer, RoomDetailsBasicInfo},

  data() {
    return {
      bookingData: useBookingStore(),
    };
  },
  methods: {
    formatDate(date) {
      let [year, month, day] = date.split("-");
      return day + "." + month + "." + year;
    },
  },
};
</script>
<template>
          <div>
          <h1>Ihre Buchung war erfolgreich!</h1>
          <p>Folgendes Zimmer wurde für den Zeitraum {{ formatDate(bookingData.arrivalDate) }} -
            {{ formatDate(bookingData.departureDate) }}
            gebucht:</p>
          <br>
          <RoomDetailsBasicInfo/>
          <h5>Ihre persönlichen Daten:</h5>
          <p>
            <span class="highlight">Name:</span> {{ bookingData.firstName }} {{ bookingData.lastName }}<br>
            <span class="highlight">Email:</span> {{ bookingData.emailAdresse }}
          </p>
          <br>
        </div>

</template>

<style scoped>
.highlight {
  font-weight: bold;
}


</style>
