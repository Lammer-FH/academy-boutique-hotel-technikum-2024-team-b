<script>
import RoomDetailsBasicInfo from "@/components/RoomsAndDetails/RoomDetailsBasicInfo.vue";
import {useBookingStore} from "@/stores/BookingStore";
import GettingHere from "@/components/StaticPagesAndNavbar/GettingHere.vue";
import {BContainer} from "bootstrap-vue-3";
import router from "@/router";

export default {
  name: "ConfirmationPageView",
  components: {BContainer, RoomDetailsBasicInfo, GettingHere},

  data() {
    return {
      bookingData: useBookingStore()
    };
  },
  methods: {
    handleBook() {
      this.bookingData.saveBooking();
      router.push('/confirmation');
    },
    handlePrint() {
      window.print();
    },
    goToHomepage() {
      router.push('/home');
    }
  }
};
</script>

<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <div>
          <h1>Ihre Buchung war erfolgreich!</h1>
          <p>Folgendes Zimmer wurde für den Zeitraum {{ bookingData.arrivalDate }} - {{ bookingData.departureDate }}
            gebucht:</p>
          <br>
          <RoomDetailsBasicInfo/>

          <h5>Ihre persönlichen Daten:</h5>
          <p>
            <span class="highlight">Name:</span> {{ bookingData.firstName }} {{ bookingData.lastName }}<br>
            <span class="highlight">Email:</span> {{ bookingData.emailAdresse }}
          </p>
          <br>
          <GettingHere/>
          <div class="button-container mt-4">
            <b-button size="lg" variant="primary" @click="handlePrint">Drucken</b-button>
            <b-button size="lg" variant="secondary" @click="goToHomepage" class="ms-3">Startseite</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.highlight {
  font-weight: bold;
}

.button-container {
  text-align: center;
}
</style>
