<script>
import ModalRoomAvailable from "@/components/AvailabilityAndConformation/ModalRoomAvailable.vue";
import ModalRegistrationSuccessful from "@/components/Useractions/ModalRegistrationSuccessful.vue";
import { useUserStore } from "@/stores/UserStore";
import {BContainer} from "bootstrap-vue-3";

export default {
  name: "Registration",
  components: {BContainer, ModalRegistrationSuccessful, ModalRoomAvailable },
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

        if (this.userData.wasSuccess) {
          this.showModal();
        }
      }
    },
    validateInput() {
      this.validInput = true;
      if (this.form.password !== this.form.passwordConfirmation) {
        this.validInput = false;
        this.errormessage = "Die Passwörter stimmen nicht überein.";
        return false;
      }
      return true;
    },
    showModal() {
      this.modalShow = true;
    }
  },
};
</script>

<template>
  <div>
    <ModalRegistrationSuccessful v-model="modalShow" />
  </div>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <div>
          <h1>Registrierung</h1>
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
                <b-form-input id="username" v-model="form.userName" required></b-form-input>
              </b-form-group>

              <b-form-group id="password" label="Password:" label-for="password">
                <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
              </b-form-group>

              <b-form-group id="passwordConfirmation" label="Password bestätigen:" label-for="passwordConfirmation">
                <b-form-input id="passwordConfirmation" v-model="form.passwordConfirmation" type="password" required></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Konto erstellen</b-button>
            </b-form><br><br>

            <p>Haben Sie schon einen Account?<br>
              <router-link to="/login">Zum Login</router-link>            </p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>