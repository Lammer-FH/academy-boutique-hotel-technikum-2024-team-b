<script>
import { BForm, BFormGroup, BFormInput, BButton } from "bootstrap-vue-3";
import { useUserStore } from "@/stores/UserStore";

export default {
  name: "Login",
  components: { BForm, BFormGroup, BFormInput, BButton },
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      isInputValid: true,
      errorMessage: '',
    };
  },
  methods: {
    async processLogin() {
      if (!this.loginForm.email || !this.loginForm.password) {
        this.isInputValid = false;
        this.errorMessage = "Bitte geben Sie eine gültige E-Mail-Adresse und ein Passwort ein.";
        return;
      }

      const userStore = useUserStore();

      try {
        await userStore.handleLogin(this.loginForm.email, this.loginForm.password);

        if (localStorage.getItem("token")) {
          this.$router.push('/home');
        } else {
          this.isInputValid = false;
          this.errorMessage = "Anmeldung nicht erfolgreich. Bitte überprüfen Sie Ihre Eingaben.";
        }
      } catch (error) {
        console.error('Anmeldefehler:', error);
        this.isInputValid = false;
        this.errorMessage = error.response && error.response.data
            ? error.response.data.message
            : "Es ist ein Problem aufgetreten. Versuchen Sie es später erneut.";
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <p class="error" v-if="!isInputValid">{{ errorMessage }}</p>

    <!-- Login Form -->
    <b-form @submit.prevent="processLogin">
      <b-form-group id="email" label="E-Mailadresse:" label-for="emailInput">
        <b-form-input
            id="emailInput"
            v-model="loginForm.email"
            type="email"
            placeholder="Ihre E-Mail-Adresse eingeben"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password" label="Passwort:" label-for="passwordInput">
        <b-form-input
            id="passwordInput"
            v-model="loginForm.password"
            type="password"
            placeholder="Ihr Passwort eingeben"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>

    <p class="mt-3">
      Noch keinen Account?
      <router-link to="/registration">Jetzt registrieren</router-link>
    </p>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
