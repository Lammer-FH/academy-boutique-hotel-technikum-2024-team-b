<script>
import {useBookingStore} from "@/stores/BookingStore";
import router from "@/router";
import {BContainer} from "bootstrap-vue-3";

export default {
  name: "Confirmation",
  components: {BContainer},

  data() {
    return {
      bookingData: useBookingStore()
    }
  },

  computed: {
    totalPrice() {
      return this.bookingData.numberNights * this.bookingData.pricePerNight
    }
  },

  methods: {
    handleBook() {
      this.bookingData.saveBooking()
    },

    handleChange() {
      router.push('/room-booking')
    }
  }
}
</script>

<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <h1>Zimmer Buchen</h1><br/>
        <h5>Bitte überprüfen Sie Ihre Daten: </h5>

        <p>
          <span class="highlight">Zimmer:</span> {{ bookingData.roomName }}<br>

          <span class="highlight">Buchungszeitraum:</span> {{ bookingData.arrivalDate }} - {{
            bookingData.departureDate
          }}<br>

          <span class="highlight">Preis gesamt:</span> €{{ totalPrice }}<br>
          Frühstück ist inkludiert.
        </p><br>

        <p>
          <span class="highlight">Ihre persönlichen Daten:</span><br>
          Vorname: {{ bookingData.firstName }}<br>
          Nachname: {{ bookingData.lastName }}<br>
          Geburtsdatum: {{ bookingData.birthDate }}<br>
          Email-Adresse: {{ bookingData.emailAdresse }}<br><br>

          <b-button size="sm" @click="handleChange" variant="secondary">Daten ändern</b-button>
          <br><br>
          <b-button size="lg" @click="handleBook" variant="primary">Zimmer buchen</b-button>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.highlight {
  font-weight: bold;
}
</style>