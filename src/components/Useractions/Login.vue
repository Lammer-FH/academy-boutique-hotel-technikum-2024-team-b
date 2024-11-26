<script>

import router from "@/router";
import {BForm} from "bootstrap-vue-3";
export default {
  name: "Login",
  components: {BForm},


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
}

</script>

<template>
  <div>
    <h1>Login</h1>
    <p class="error" v-if="!validInput">{{ errormessage }}</p>

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