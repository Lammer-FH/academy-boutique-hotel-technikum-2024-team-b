<script>

import BookingForm from "@/components/Booking/BookingForm.vue";
import {useBookingStore} from "@/stores/BookingStore";
import ModalQuitBooking from "@/components/Booking/ModalQuitBooking.vue";
import router from "@/router";
import {BContainer} from "bootstrap-vue-3";
import {useCollapseStore} from "@/stores/CollapseStore";
import Stepper from "@/components/Booking/Stepper.vue";

export default {
  name: "RoomBooking",
  components: {
    Stepper,
    BContainer,
    ModalQuitBooking,
    BookingForm
  },
  data() {
    return {
      bookingData: useBookingStore(),
      roomDetailView: useCollapseStore(),
      modalBookingShow: false,

    };
  },
  computed: {
    totalPrice() {
      return this.bookingData.numberNights * this.bookingData.pricePerNight
    },
    formattedArrivalDate() {
      return this.formatDate(this.bookingData.arrivalDate);
    },
    formattedDepartureDate() {
      return this.formatDate(this.bookingData.departureDate);
    }
  },

  methods: {
    formatDate(date) {
      const [year, month, day] = date.split("-");
      return day + "." + month + "." + year;
    },
    showModalBooking() {
      this.modalBookingShow = true;
    },

    handleChangeRoom() {
      router.push("/rooms");
    },

    handleChangeDates() {
      this.roomDetailView.setCollapseTrue();
      router.push({
        name: 'roomDetail',
        params: {roomId: this.bookingData.roomId, scrollTo: 'availability'}
      });
    }
  }
};

</script>


<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <Stepper :current-step="0" /><br>
          <div>
            <h1>Zimmer buchen</h1><br><br>
            <p><span class="highlight">Zimmer:</span> {{ bookingData.roomName }}
              <b-button size="sm" @click="handleChangeRoom" class="change-button">Ändern</b-button>
            </p>
            <p><span class="highlight">Buchungszeitraum:</span> {{ formattedArrivalDate }} -
              {{ formattedDepartureDate }}
              <b-button size="sm" @click="handleChangeDates" class="change-button">Ändern</b-button>
            </p>
            <p><span class="highlight">Preis gesamt:</span> €{{ totalPrice }}<br>
              Frühstück ist inkludiert.</p><br><br>

            <h5>Bitte geben Sie Ihre Daten ein:</h5>
            <BookingForm/>
          </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<style scoped>
.highlight {
  font-weight: bold;
}
</style>