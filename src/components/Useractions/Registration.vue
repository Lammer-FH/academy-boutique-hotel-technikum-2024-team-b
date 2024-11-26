<script>

import router from "@/router";

export default {
  name: "Registration",
  data() {
    return {
      //userData: useUserStore(),
      form: {
        firstName: '',
        lastName: '',
        birthDate: '',
        email: '',
        userName: '',
        passwort: '',
        passwordConfirmation: ''
      },

      validInput: true,
      errormessage: '',
      show: true

    }
  },

  methods: {

    saveInput() {
      if (this.validateInput()) {
        this.userData.registerUser(this.form.firstName, this.form.lastName, this.form.email, this.form.birthDate, this.form.userName, this.form.password);
        router.push('home')
      }
    },

    validateInput() {
      this.validInput = true
      if (this.form.password !== this.form.passwordConfirmation) {
        this.validInput = false;
        this.errormessage = "Die Passwörter stimmen nicht überein."
        return false
      }
      return true
    }
  },
}

</script>

<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <div>
          <h1>Registrierung</h1>
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

              <b-form-group id="userName" label="Username:" label-for="username">
                <b-form-input
                    id="username"
                    v-model="form.userName"
                    required=""
                ></b-form-input>
              </b-form-group>

              <b-form @submit.stop.prevent>
                <label for="text-password">Password</label>
                <b-form-input type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
                <b-form-text id="password-help-block">
                  Your password must be 8-20 characters long, contain letters and numbers, and must not
                  contain spaces, special characters, or emoji.
                </b-form-text>
              </b-form>

              <b-form @submit.stop.prevent>
                <label for="text-password">Password bestätigen</label>
                <b-form-input type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
                <b-form-text id="password-help-block">
                  Your password must be 8-20 characters long, contain letters and numbers, and must not
                  contain spaces, special characters, or emoji.
                </b-form-text>
              </b-form>


              <b-button type="submit" variant="primary">Konto erstellen</b-button>
            </b-form><br><br>

            <p>Haben Sie schon eine Account?<br>
              <a href="/login">Zum Login</a>
            </p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>

</style>