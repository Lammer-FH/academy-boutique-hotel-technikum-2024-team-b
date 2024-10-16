<script setup>
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BDropdownItem } from "bootstrap-vue-3";
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="Light" class="navbar">
      <b-navbar-brand href="#" class="navbar-brand">Technikum Hotel</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.navbar {
  background-color: antiquewhite;
  width: 100%;
}

.navbar-brand {
  color: black;
}

#nav-collapse {
  color: black;
}
</style>
