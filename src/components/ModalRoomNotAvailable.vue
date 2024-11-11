<script>
export default {
  name: "ModalRoomNotAvailable",

  props: {
    modelValue: Boolean,
  },
  data() {
    return {
      message: 'Das Zimmer ist zum ausgewählten Zeitpunkt leider nicht verfügbar. Wählen Sie ein anderes Zimmer oder einen anderen Zeitpunkt',
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
