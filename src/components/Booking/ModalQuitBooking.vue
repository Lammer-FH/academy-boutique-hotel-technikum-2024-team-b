<script>
import router from "@/router";
import {BModal} from "bootstrap-vue-3";

export default {
  name: "ModalQuitBooking",
  components: {BModal},

  props: {
    modelValue: Boolean,
  },
  data() {
    return {
      message: 'Sind Sie sicher, dass Sie den Buchungsprozess abbrechen wollen?',
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
    handleOk() {
      this.isVisible = false;
      router.push('home');
    },

  }
}
</script>


<template>
  <div>
    <b-modal v-model="isVisible" title="Buchung abbrechen" ok-title="Ja" cancel-title="Zurück zur Buchung" @ok="handleOk">{{ message }}

    </b-modal>
  </div>

 </template>

<style scoped>

</style>