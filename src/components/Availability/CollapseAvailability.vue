<script>
import ModalRoomAvailable from "@/components/Availability/ModalRoomAvailable.vue";
import {useBookingStore} from "@/stores/BookingStore";
import {useRoomsStore} from "@/stores/RoomsStore";

export default {
  name: "CollapseAvailability",
  components: {ModalRoomAvailable},

  data() {
    return {
      bookingData: useBookingStore(),
      roomData: useRoomsStore(),
      context: null,
      isCollapsed: false,
      arrival_date: '',
      departure_date: '',
      errormessage: '',
      validInput: true,
      modalShow: false,
    }
  },

  methods: {

    changeVisibilityCollapse() {
      this.errormessage = '';
      this.arrival_date = '';
      this.departure_date = '';
      this.isCollapsed = !this.isCollapsed;
    },

    async checkRoomAvailability() {
      if (this.validateInput()) {
        this.bookingData.setBookingDates(this.arrival_date, this.departure_date, this.roomData.roomId, this.roomData.roomName)
        await this.bookingData.checkAvailability()
        console.log(this.bookingData.numberNights)
        console.log(this.bookingData.roomName)
        console.log(this.bookingData.roomId)
        this.showModal()
      }
    },

    validateInput() {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(0, 10);
      this.validInput = true;
      this.errormessage = '';


      if (this.arrival_date === '' || this.departure_date === '') {
        this.validInput = false;
        this.errormessage = "Bitte geben Sie ein Datum ein.";
        return false
      }

      if (this.arrival_date < formattedDate) {
        this.validInput = false;
        this.errormessage = "Das Datum kann nicht in der Vergangenheit liegen."
        return false
      }

      if (this.departure_date <= this.arrival_date) {
        this.validInput = false;
        this.errormessage = "Abreisedatum muss nach dem Anreisedatum liegen!";
        return false
      }
      return true
    },
    showModal() {
      this.modalShow = true

    },

  }
}

</script>


<template>

  <div>
    <ModalRoomAvailable v-model="modalShow"/>
  </div>


  <b-container fluid class="text-center">

    <a href="#" @click.prevent="changeVisibilityCollapse" class="btn-link">Buchungszeitraum auswählen</a>

    <b-collapse v-model="isCollapsed">
<br>
      <b>Bitte wählen Sie ein Datum aus:</b><br><br>
      <p class="error" v-if="!validInput">{{ errormessage }}</p>
      <p>Anreise: <input class="m-2" type="date" v-model="arrival_date"/><br>
        Abreise: <input class="m-2" type="date" v-model="departure_date"/><br>
      </p><br>
      <b-button variant="primary" v-on:click="checkRoomAvailability">Verfügbarkeit prüfen</b-button>

    </b-collapse>

  </b-container>

</template>


<style scoped>
.error {
  color: red;
}
</style>