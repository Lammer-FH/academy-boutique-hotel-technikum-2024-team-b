<script>
import {useBookingStore} from "@/stores/BookingStore";
import router from "@/router";
import {BContainer} from "bootstrap-vue-3";
import ErrorPost from "@/components/Statics/ErrorPost.vue";
import Stepper from "@/components/Booking/Stepper.vue";

export default {
  name: "OrderConformation",
  components: {Stepper, ErrorPost, BContainer},

  data() {
    return {
      bookingData: useBookingStore(),

    };
  },

  computed: {
    totalPrice() {
      return this.bookingData.numberNights * this.bookingData.pricePerNight;
    },
    bookingSuccess() {
      return this.bookingData.bookingSubmissionSuccess;
    }
  },

  methods: {
    formatDate(date) {
      let [year, month, day] = date.split("-");
      return day + "." + month + "." + year;
    },
    async handleBook() {
      await this.bookingData.saveBooking();

      // Only redirect if booking is successfully sent to backend
      if (this.bookingData.bookingSubmissionSuccess) {
        await router.push('/booking-conformation');
      }

      },

    handleChange() {
      router.push('/room-booking');
    }
  },
};
</script>

<template>

  <b-container fluid v-if="bookingSuccess">
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <Stepper :current-step="1"/>
        <br>

        <h5>Bitte überprüfen Sie Ihre Daten: </h5><br>

        <p>
          <span class="highlight">Zimmer:</span> {{ bookingData.roomName }}<br>
          <span class="highlight">Buchungszeitraum:</span> {{ formatDate(bookingData.arrivalDate) }} -
          {{ formatDate(bookingData.departureDate) }}<br>
          <span class="highlight">Preis gesamt:</span> €{{ totalPrice }}<br>
          Frühstück ist inkludiert.
        </p><br>

        <p>
          <span class="highlight">Ihre persönlichen Daten:</span><br>
          Vorname: {{ bookingData.firstName }}<br>
          Nachname: {{ bookingData.lastName }}<br>
          Geburtsdatum: {{ formatDate(bookingData.birthDate) }}<br>
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
