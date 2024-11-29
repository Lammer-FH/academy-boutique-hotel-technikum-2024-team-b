<script>
import { BForm, BFormGroup, BFormInput, BButton } from "bootstrap-vue-3";
import { useUserStore } from "@/stores/UserStore"; // Importing the Pinia store

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

      // Access the user store
      const userStore = useUserStore();

      try {
        // Attempt to log in using the store's handleLogin function
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

        // Display an error message
        this.errormessage = error.response && error.response.data
            ? error.response.data.message
            : "Fehler bei der Anmeldung. Bitte versuchen Sie es später noch einmal.";
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <p class="error" v-if="!validInput">{{ errormessage }}</p>

    <!-- Login Form -->
    <b-form @submit.prevent="handleLogin">
      <b-form-group id="email" label="E-Mailadresse:" label-for="emailInput">
        <b-form-input
            id="emailInput"
            v-model="form.email"
            type="email"
            placeholder="Geben Sie Ihre E-Mail-Adresse ein"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password" label="Passwort:" label-for="passwordInput">
        <b-form-input
            id="passwordInput"
            v-model="form.password"
            type="password"
            placeholder="Geben Sie Ihr Passwort ein"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>

    <!-- Link to Registration Page -->
    <p class="mt-3">
      Noch kein Account? <router-link to="/register">Zur Anmeldung</router-link>
    </p>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
