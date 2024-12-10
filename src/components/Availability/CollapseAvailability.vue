<script>
import ModalRoomAvailable from "@/components/Availability/ModalRoomAvailable.vue";
import {useBookingStore} from "@/stores/BookingStore";
import {useRoomsStore} from "@/stores/RoomsStore";
import {BButton} from "bootstrap-vue-3";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {useCollapseStore} from "@/stores/CollapseStore";

export default {
  name: "CollapseAvailability",
  components: {BButton, ModalRoomAvailable, VueDatePicker},

  data() {
    return {
      bookingData: useBookingStore(),
      roomData: useRoomsStore(),
      collapseStore: useCollapseStore(),
      context: null,
      //isCollapsed: false,
      validInput: true,
      modalShow: false,
      dateRange: null,
      format: "dd.MM.yyyy",
    }
  },

  computed: {
    arrivalDate() {
      return this.dateRange[0].toISOString().slice(0, 10);
    },

    departureDate() {
      return this.dateRange[1].toISOString().slice(0, 10);
    }
  },

  methods: {

    /*changeVisibilityCollapse() {
      this.dateRange = [];
      this.isCollapsed = !this.isCollapsed;
    },*/

    // because of OPTIONS API workaround with vanilla JS
    scrollToCollapse(elementId = 'collapseElement') {
      this.$nextTick(() => {
        let scrollToElement = document.getElementById(elementId);
        scrollToElement.scrollIntoView({behavior: 'smooth'});
      });
    },

    async checkRoomAvailability() {
      this.bookingData.setBookingDates(this.arrivalDate, this.departureDate, this.roomData.roomId, this.roomData.roomName, this.roomData.roomPricePerNight)
      await this.bookingData.checkAvailability()
      this.showModal()

    },

    showModal() {
      this.modalShow = true

    }
  }
}

</script>


<template>

  <div>
    <ModalRoomAvailable v-model="modalShow"/>
  </div>


  <b-container fluid class="text-center small-container" id="availability">

    <a @click.prevent="collapseStore.changeVisibilityCollapse" class="btn-link">Buchungszeitraum auswählen</a>

    <b-collapse v-model="collapseStore.isCollapsed" @shown="scrollToCollapse" id="collapseElement">
      <br>
      <b>Bitte wählen Sie ein An- und Abreisedatum aus:</b><br><br>
      <VueDatePicker v-model="dateRange" required
                     :range="{ partialRange: false, minRange: 1 }"
                     :min-date="new Date()"
                     :format="format"
                     locale="de"
                     :enable-time-picker="false"
                     placeholder="Wählen Sie einen Zeitraum."


      ></VueDatePicker>
      <br><br>

      <b-button variant="primary" v-on:click="checkRoomAvailability">Verfügbarkeit prüfen</b-button>

    </b-collapse>

  </b-container>

</template>


<style scoped>
.small-container {
  max-width: 600px;
}
</style>