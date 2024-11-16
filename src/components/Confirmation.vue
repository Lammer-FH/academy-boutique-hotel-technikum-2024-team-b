<script>
import {useBookingStore} from "@/stores/BookingStore";
import router from "@/router";

export default {
  name: "Confirmation",

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
      alert('Ihre Buchung war erfolgreich!');
    },

    handleChange() {
      router.push('room-booking')
    }
  }
}
</script>

<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <h1>Zimmer Buchen</h1><br><br>
        <h5>Bitte überprüfen Sie Ihre Daten: </h5>

        <p><strong>Zimmer:</strong> {{ bookingData.roomName }}<br>

        <strong>Buchungszeitraum:</strong> {{ bookingData.arrivalDate }} - {{ bookingData.departureDate }}<br>

        <strong>Preis gesamt:</strong> €{{ totalPrice }}<br>
          Frühstück ist inkludiert.</p><br>

        <p><strong>Ihre persönlichen Daten:</strong><br>
          Vorname: {{ bookingData.firstName }}<br>
          Nachname: {{ bookingData.lastName }}<br>
          Geburtsdatum: {{ bookingData.birthDate }}<br>
          Email-Adresse: {{ bookingData.emailAdresse }}<br><br>

          <b-button size="sm" @click="handleChange" variant="secondary">Daten ändern</b-button><br><br>
          <b-button size="lg" @click="handleBook" variant="primary">Zimmer buchen</b-button>

        </p>
      </b-col>
    </b-row>
  </b-container>


</template>

<style scoped>

</style>