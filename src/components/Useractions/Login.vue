<script>
import {BButton, BForm, BFormGroup, BFormInput} from "bootstrap-vue-3";
import {useUserStore} from "@/stores/UserStore"; // Importing the Pinia store

export default {
  name: "Login",
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      validInput: true,
      errormessage: '',
    };
  },
  methods: {
    async handleLogin() {
      if (!this.form.email || !this.form.password) {
        this.validInput = false;
        this.errormessage = "Bitte geben Sie sowohl eine E-Mail-Adresse als auch ein Passwort ein.";
        return;
      }
      const userStore = useUserStore();
      try {
        await userStore.handleLogin(this.form.email, this.form.password);

        if (localStorage.getItem("token")) {
          this.$router.push('/');
        } else {
          this.validInput = false;
          this.errormessage = "Login fehlgeschlagen. Überprüfen Sie Ihre Zugangsdaten.";
        }
      } catch (error) {
        console.error('Login error:', error);
        this.validInput = false;

        this.errormessage = error.response && error.response.data
            ? error.response.data.message
            : "Fehler bei der Anmeldung. Bitte versuchen Sie es später noch einmal.";
      }
    }
  }
}
</script>

<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <div>
          <h1>Login</h1><br>
          <p class="error" v-if="!validInput">{{ errormessage }}</p>
          <b-form @submit.prevent="handleLogin">
            <b-form-group id="email" label="E-Mailadresse:" label-for="emailInput">
              <b-form-input
                  id="emailInput"
                  v-model="form.email"
                  type="email"
                  placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                  autocomplete="username"
                  required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="password" label="Passwort:" label-for="passwordInput">
              <b-form-input
                  id="passwordInput"
                  v-model="form.password"
                  type="password"
                  placeholder="Geben Sie Ihr Passwort ein"
                  autocomplete="current-password"
                  required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
          <p class="mt-3">
            Noch kein Account?
            <router-link to="/registration">Zur Registrierung</router-link>
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.error {
  color: red;
}
</style>
