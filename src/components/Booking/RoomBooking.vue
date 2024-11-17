<script>

import BookingForm from "@/components/Booking/BookingForm.vue";
import {useBookingStore} from "@/stores/BookingStore";
import ModalQuitBooking from "@/components/Booking/ModalQuitBooking.vue";
import router from "@/router";

export default {
  name: "RoomBooking",
  components: {
    ModalQuitBooking,
    BookingForm
  },
  data() {
    return {
      bookingData: useBookingStore(),
      modalBookingShow: false,

    };
  },
  computed: {
    totalPrice() {
      return this.bookingData.numberNights * this.bookingData.pricePerNight
    }
  },

  methods: {
    showModalBooking() {
      this.modalBookingShow = true;
    },

    handleChangeRoom() {
      router.push("/rooms");
    },

    handleChangeDates() {
      router.push({
        name: 'roomDetail',
        params: {roomId: this.bookingData.roomId}
      });
    }
  }
};

</script>


<template>


  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <div>
          <h1>Zimmer buchen</h1><br><br>
          <p><strong>Zimmer:</strong> {{ bookingData.roomName }}
            <b-button size="sm" @click="handleChangeRoom" class=" change-button">Ändern</b-button>
          </p>
          <p><strong>Buchungszeitraum:</strong> {{ bookingData.arrivalDate }} - {{ bookingData.departureDate }}
            <b-button size="sm" @click="handleChangeDates" class="change-button">Ändern</b-button>
          </p>
          <p><strong>Preis gesamt:</strong> €{{ totalPrice }}<br>
          Frühstück ist inkludiert.</p><br><br>

          <h5>Bitte geben Sie ihre Daten ein:</h5>


          <BookingForm/>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>

</style>