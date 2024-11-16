<script>
import router from "@/router";
import {useBookingStore} from "@/stores/BookingStore";

export default {
  name: "ModalRoomAvailable",

  props: {
    modelValue: Boolean,
  },
  data() {
    return {
      bookingData: useBookingStore(),
      messageAvailable: 'Das Zimmer ist zum ausgewählten Zeitpunkt verfügbar.',
      messageNotAvailable: 'Das Zimmer ist zum ausgewählten Zeitpunkt leider nicht verfügbar. Wählen Sie ein anderes Zimmer oder einen anderen Zeitpunkt.',
    }
  },


  computed: {
    isVisible: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value); // Sync with parent
      },
    },
  },

  methods: {
    handleOk() {
      this.isVisible = false;
      router.push('room-booking');
    },

    handleDifferentRoom() {
      this.modalShow = false;
      router.push('rooms');
    }
  }
}
</script>


<template>
  <div v-if="bookingData.availability">
    <b-modal v-model="isVisible" title="Verfügbarkeit" ok-only ok-title="Zur Buchung" @ok="handleOk">{{ messageAvailable }}

    </b-modal>
  </div>

  <div v-if="!bookingData.availability">
    <b-modal v-model="isVisible" title="Verfügbarkeit" ok-title="Anderer Zeitraum" cancel-title="Anderes Zimmer" @cancel="handleDifferentRoom"> {{ messageNotAvailable }}

    </b-modal>
  </div>
</template>


<style scoped>

</style>