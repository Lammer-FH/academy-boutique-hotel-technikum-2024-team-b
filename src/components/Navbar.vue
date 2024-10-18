<script>
import {BCollapse, BDropdownItem, BNavbar, BNavbarBrand, BNavbarNav, BNavbarToggle} from "bootstrap-vue-3";

export default {
  name: "navigation",
  components: {BCollapse, BNavbar, BDropdownItem, BNavbarToggle, BNavbarNav, BNavbarBrand},

  data() {
    return {
      isLogedIn: false
    }
  }
}
</script>
<template>
  <b-navbar toggleable="lg" type="light" variant="light" class="fixed-top">
      <b-navbar-brand href="#" >Hotel Technikum</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" v-if="!isLogedIn">Login</b-nav-item>
        <b-nav-item href="#" v-if="isLogedIn">Logout</b-nav-item>
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-lg-auto p-lg-auto">
          <b-nav-item href="#">Unsere Zimmer</b-nav-item>
          <b-nav-item href="#">Anreise & Kontakt</b-nav-item>
          <b-nav-item href="#">Über Uns</b-nav-item>
          <b-nav-item href="#"> Impressum</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
</template>

<style scoped>
</style>

