<script>
import router from "@/router";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: "ModalRegistrationSuccessful",

  props: {
    modelValue: Boolean,
  },

  data() {
    return {
      userData: useUserStore(),
      messageSuccessful: 'Die Registrierung war erfolgreich. Sie können jetzt eingeloggt weitersuchen.',
      messageFailed: 'Ups, da ist leider was schief gegangen. Bitte registrieren Sie sich nochmal.',
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
      router.push("/rooms");
    },
  }
}

</script>

<template>
  <div v-if="userData.wasSuccess">
    <b-modal v-model="isVisible" title="Registrierung abgeschlossen" ok-only ok-title="Ok" @ok="handleOk">
      {{ messageSuccessful }}

    </b-modal>
  </div>
  <div v-if="!userData.wasSuccess">
    <b-modal v-model="isVisible" title="Registrierung abgeschlossen" ok-only ok-title="Ok" @ok="handleOk">
      {{ messageFailed }}

    </b-modal>
  </div>

</template>

<style scoped>

</style>