<script>
import ModalRoomAvailable from "@/components/Availability/ModalRoomAvailable.vue";
import ModalRegistrationSuccessful from "@/components/Useractions/ModalRegistrationSuccessful.vue";
import {useUserStore} from "@/stores/UserStore";
import {BContainer} from "bootstrap-vue-3";

export default {
  name: "Registration",
  components: {BContainer, ModalRegistrationSuccessful, ModalRoomAvailable},
  data() {
    return {
      userData: useUserStore(),
      form: {
        firstName: '',
        lastName: '',
        birthDate: '',
        email: '',
        userName: '',
        password: '',
        passwordConfirmation: ''
      },
      validInput: true,
      errormessage: '',
      show: true,
      modalShow: false,
    };
  },
  methods: {
    async saveInput() {
      if (this.validateInput()) {
        await this.userData.registerUser(
            this.form.firstName,
            this.form.lastName,
            this.form.birthDate,
            this.form.email,
            this.form.userName,
            this.form.password
        );

        this.showModal();
      }
    },
    validateInput() {
      this.validInput = true;
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      const minimumAgeDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 18));
      let minimumAge = minimumAgeDate.toISOString().slice(0, 10);
      let birthYear = this.form.birthDate.split("-")[0];
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (this.form.password !== this.form.passwordConfirmation) {
        this.validInput = false;
        this.errormessage = "Die Passwörter stimmen nicht überein.";
        return false;
      }

      if (birthYear <= "1900" || birthYear >= currentYear) {
        this.validInput = false;
        this.errormessage = "Bitte geben Sie ein gültiges Geburtsjahr ein."
        return false
      }

      if (this.form.birthDate > minimumAge) {
        this.validInput = false;
        this.errormessage = "Sie müssen mindestens 18 Jahre alt sein, um sich bei uns registrieren zu können."
        return false
      }

      if (!regex.test(this.form.password)) {
        this.validInput = false;
        this.errormessage =
            "Das Passwort muss mindestens 8 Zeichen lang sein, einen Großbuchstaben, einen Kleinbuchstaben und eine Zahl enthalten.";
        return false
      }

      return true;
    },

    scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    },

    showModal() {
      this.modalShow = true;
    }
  },
};

</script>

<template>

  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <div>
          <ModalRegistrationSuccessful v-model="modalShow"/>
        </div>
        <div>
          <h1>Registrierung</h1><br>
          <div>
            <p class="error" v-if="!validInput">{{ errormessage }}</p>

            <b-form v-if="show" @submit.prevent="saveInput">
              <b-form-group id="firstName" label="Vorname:" label-for="firstname">
                <b-form-input id="firstname" v-model="form.firstName" required></b-form-input>
              </b-form-group>

              <b-form-group id="lastName" label="Nachname:" label-for="lastname">
                <b-form-input id="lastname" v-model="form.lastName" required></b-form-input>
              </b-form-group>

              <b-form-group id="birthDate" label="Geburtsdatum:" label-for="birthdate">
                <b-form-input id="birthdate" v-model="form.birthDate" type="date" required></b-form-input>
              </b-form-group>

              <b-form-group id="email" label="E-Mailadresse:" label-for="mailadresse">
                <b-form-input id="mailadresse" v-model="form.email" type="email" required></b-form-input>
              </b-form-group>

              <b-form-group id="userName" label="Username:" label-for="username">
                <b-form-input id="username" v-model="form.userName" autocomplete="username" required></b-form-input>
              </b-form-group>

              <b-form-group id="password" label="Password:" label-for="password">
                <b-form-input id="password" v-model="form.password" type="password" autocomplete="new-password"
                              required></b-form-input>
              </b-form-group>

              <b-form-group id="passwordConfirmation" label="Password bestätigen:" label-for="passwordConfirmation">
                <b-form-input id="passwordConfirmation" v-model="form.passwordConfirmation" type="password"
                              autocomplete="new-password"
                              required></b-form-input>
              </b-form-group>

              <b-button type="submit" @click="scrollToTop" variant="primary">Konto erstellen</b-button>
            </b-form>
            <br><br>
            <p>
              <router-link to="/login">Haben Sie schon einen Account?</router-link>
            </p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
.error {
  color: red;
}

</style>
