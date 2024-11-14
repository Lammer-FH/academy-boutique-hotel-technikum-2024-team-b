<script>
import router from "@/router";
import {useBookingStore} from "@/stores/BookingStore";

export default {
  name: "ModalRoomNotAvailable",

  props: {
    modelValue: Boolean,
  },
  data() {
    return {
      bookingData: useBookingStore(),
      message: 'Das Zimmer ist zum ausgewählten Zeitpunkt leider nicht verfügbar. Wählen Sie ein anderes Zimmer oder einen anderen Zeitpunkt.',
    }
  },

  computed: {
    isVisible: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },

  methods: {
    handleDifferentRoom() {
      this.modalShow = false;
      router.push('rooms');
    }
  }
}
</script>


<template>
  <div>
    <b-modal v-model="isVisible" :title="bookingData.arrivalDate.toString()" ok-title="Anderer Zeitraum" cancel-title="Anderes Zimmer" @cancel="handleDifferentRoom"> {{ message }}

    </b-modal>
  </div>
</template>


<style scoped>

</style>
