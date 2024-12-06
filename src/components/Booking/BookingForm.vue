<script>

import {useBookingStore} from "@/stores/BookingStore";
import router from "@/router";
import {BForm} from "bootstrap-vue-3";

export default {
  name: "BookingForm",
  components: {BForm},

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
      show: true

    }
  },
  methods: {
    saveInput() {
      if (this.validateInput()) {
        this.bookingData.setUserData(this.form.firstName, this.form.lastName, this.form.birthDate, this.form.email);
        router.push('confirmation')
      }
    },

    validateInput() {
      this.validInput = true
      if (this.form.email !== this.form.emailConfirmation) {
        this.validInput = false;
        this.errormessage = "Die Email-Adressen stimmen nicht überein."
        return false
      }
      return true
    }
  }
}

</script>

<template>
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


      <b-button type="submit" variant="primary">Daten überprüfen</b-button>
    </b-form>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>