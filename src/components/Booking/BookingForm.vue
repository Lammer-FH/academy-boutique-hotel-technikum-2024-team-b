<script>

import {useBookingStore} from "@/stores/BookingStore";
import router from "@/router";
import {BForm} from "bootstrap-vue-3";
import ModalQuitBooking from "@/components/Booking/ModalQuitBooking.vue";
import ModalRoomAvailable from "@/components/Availability/ModalRoomAvailable.vue";

export default {
  name: "BookingForm",
  components: {ModalRoomAvailable, ModalQuitBooking, BForm},

  data() {
    return {
      bookingData: useBookingStore(),
      form: {
        firstName: '',
        lastName: '',
        birthDate: '',
        email: '',
        emailConfirmation: ''
      },
      validInput: true,
      errormessage: '',
      show: true,
      modalCancelShow: false

    }
  },
  methods: {
    saveInput() {
      if (this.validateInput()) {
        this.bookingData.setUserData(this.form.firstName, this.form.lastName, this.form.birthDate, this.form.email);
        router.push('order-confirmation')
      }
    },

    validateInput() {
      this.validInput = true
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      const minimumAgeDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 18));
      let minimumAge = minimumAgeDate.toISOString().slice(0, 10);
      let birthYear = this.form.birthDate.split("-")[0];

      if (this.form.email !== this.form.emailConfirmation) {
        this.validInput = false;
        this.errormessage = "Die Email-Adressen stimmen nicht überein."
        return false
      }

      if(birthYear <= "1900" || birthYear >= currentYear) {
        this.validInput = false;
        this.errormessage = "Bitte geben Sie ein gültiges Geburtsjahr ein."
        return false
      }

      if(this.form.birthDate > minimumAge) {
        this.validInput = false;
        this.errormessage = "Sie müssen mindestens 18 Jahre alt sein, um ein Zimmer buchen zu können"
        return false
      }


      return true
    },

    cancelBooking() {
      this.modalCancelShow = true
    },

  }
}

</script>

<template>
  <ModalQuitBooking v-model="modalCancelShow"/>

  <div>
    <p class="error" v-if="!validInput">{{ errormessage }}</p>

    <b-form v-if="show" @submit.prevent="saveInput">

      <b-form-group id="firstName" label="Vorname:" label-for="firstname">
        <b-form-input
            id="firstname"
            v-model="form.firstName"
            required=""
        ></b-form-input>
      </b-form-group>

      <b-form-group id="lastName" label="Nachname:" label-for="lastname">
        <b-form-input
            id="lastname"
            v-model="form.lastName"
            placeholder=""
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="birthDate" label="Geburtsdatum:" label-for="birthdate">
        <b-form-input
            id="birthdate"
            v-model="form.birthDate"
            type="date"
            placeholder=""
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="email" label="E-Mailadresse:" label-for="mailadresse">
        <b-form-input
            id="mailadresse"
            v-model="form.email"
            type="email"
            placeholder=""
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="emailconfirm" label="E-Mailadresse bestätigen:" label-for="mailadresseConfirm">
        <b-form-input
            id="mailadresseConfirm"
            v-model="form.emailConfirmation"
            type="email"
            placeholder=""
            required
        ></b-form-input>
      </b-form-group>

      <div class="button-container">
        <b-button variant="secondary" v-on:click="cancelBooking">Buchung abbrechen</b-button>
        <b-button type="submit" variant="primary">Daten überprüfen</b-button>
      </div>
    </b-form>
  </div>
</template>

<style scoped>
.error {
  color: red;
}

.button-container {
  display: flex;
  justify-content: space-between;
}
</style>