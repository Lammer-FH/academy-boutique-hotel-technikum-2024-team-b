<script>
import AppModal from "@/components/nicht verwendet/AppModal.vue";
import router from "@/router";

export default {
  name: "ModalRoomAvailable",

  props: {
    modelValue: Boolean,
  },
  data() {
    return {
      message: 'Das Zimmer ist zum ausgewählten Zeitpunkt verfügbar',
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
      this.modalShow = false;
      router.push('home');
    },
  }
}
</script>


<template>
  <div>
    <b-modal v-model="isVisible" title="Verfügbarkeit" ok-only ok-title="Jetzt Buchen" @ok="handleOk">{{ message }}

    </b-modal>
  </div>
</template>


<style scoped>

</style>