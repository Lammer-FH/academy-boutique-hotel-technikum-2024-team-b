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

      if (birthYear <= "1900" || birthYear >= currentYear) {
        this.validInput = false;
        this.errormessage = "Bitte geben Sie ein gültiges Geburtsjahr ein."
        return false
      }

      if (this.form.birthDate > minimumAge) {
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
  <b-container fluid>
    <b-row class="justify-content">
      <b-col sm="12" md="8" lg="6">
        <ModalQuitBooking v-model="modalCancelShow"/>
        <p class="error" v-if="!validInput">{{ errormessage }}</p>

        <b-form v-if="show" @submit.prevent="saveInput">
          <b-form-group id="firstName" label="Vorname:" label-for="firstname">
            <b-form-input id="firstname" v-model="form.firstName" required/>
          </b-form-group>

          <b-form-group id="lastName" label="Nachname:" label-for="lastname">
            <b-form-input id="lastname" v-model="form.lastName" required/>
          </b-form-group>

          <b-form-group id="birthDate" label="Geburtsdatum:" label-for="birthdate">
            <b-form-input
                id="birthdate"
                v-model="form.birthDate"
                type="date"
                required
            />
          </b-form-group>

          <b-form-group id="email" label="E-Mailadresse:" label-for="mailadresse">
            <b-form-input
                id="mailadresse"
                v-model="form.email"
                type="email"
                required
            />
          </b-form-group>

          <b-form-group
              id="emailconfirm"
              label="E-Mailadresse bestätigen:"
              label-for="mailadresseConfirm"
          >
            <b-form-input
                id="mailadresseConfirm"
                v-model="form.emailConfirmation"
                type="email"
                required
            />
          </b-form-group>

          <b-row class="button-container">
            <b-col sm="auto">
              <b-button class="buttons" type="submit" variant="primary">Daten überprüfen</b-button>
            </b-col>
            <b-col sm="auto">
              <b-button variant="secondary" class="buttons"  @click="cancelBooking">
                Buchung abbrechen
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.error {
  color: red;
}
.button-container{
  justify-content: space-between;
}

@media (max-width: 768px) {
  .button-container {
    flex-direction: column;
    gap: 10px;
  }
  .buttons{
    width: 100%;
  }
}
</style>
