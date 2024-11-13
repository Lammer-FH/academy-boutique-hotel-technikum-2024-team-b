<script>

import AppModal from "@/components/nicht verwendet/AppModal.vue";
import ModalRoomAvailable from "@/components/ModalRoomAvailable.vue";
import ModalRoomNotAvailable from "@/components/ModalRoomNotAvailable.vue";
import {useBookingStore} from "@/stores/BookingStore";

export default {
  name: "CollapseAvailability",
  components: {ModalRoomNotAvailable, ModalRoomAvailable, AppModal},


  props: {

  },

  data() {
    return {
      bookingData: useBookingStore(),
      roomId: 2,
      selected_date: '',
      context: null,
      isCollapsed: false,
      arrival_date: '',
      departure_date: '',
      errormessage: '',
      validInput: true,
      modalShow: false,
      //availableDummy: true,
      modalMessageAvailable: 'Das Zimmer ist zum ausgewählten Zeitpunkt verfügbar',
      modalMessageNotAvailable: 'Das Zimmer ist zum ausgewählten Zeitpunkt leider nicht verfügbar. Wählen Sie ein anderes Zimmer oder einen anderen Zeitpunkt',
    }
  },
  methods: {

    changeVisibilityCollapse() {
      this.errormessage = '';
      this.arrival_date = '';
      this.departure_date = '';
      this.isCollapsed = !this.isCollapsed;
    },

    checkRoomAvailability() {
      if (this.validateInput()) {
        this.bookingData.setBookingDates(this.arrival_date, this.departure_date, this.roomId)
        this.bookingData.checkAvailability()
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

  <div v-if="bookingData.availability">
    <ModalRoomAvailable v-model="modalShow"/>
  </div>

  <div v-if="!bookingData.availability">
    <ModalRoomNotAvailable v-model="modalShow"/>
  </div>


  <b-container fluid class="text-center">
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <b-button @click="changeVisibilityCollapse" class="m-5">Verfügbarkeit prüfen</b-button>
        <b-collapse v-model="isCollapsed">

          <b>Bitte wählen Sie ein Datum aus:</b><br>
          <p class="error" v-if="!validInput">{{ errormessage }}</p>
          <p>Anreise: <input class="m-2" type="date" v-model="arrival_date"/><br>
            Abreise: <input class="m-2" type="date" v-model="departure_date"/><br>
          </p>
          <b-button variant="primary" v-on:click="checkRoomAvailability">Verfügbarkeit prüfen</b-button>

        </b-collapse>
      </b-col>
    </b-row>
  </b-container>


</template>


<style scoped>
.error {
  color: red;
}
</style>