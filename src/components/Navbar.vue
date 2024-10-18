<script>
import {BCollapse, BDropdownItem, BNavbar, BNavbarBrand, BNavbarNav, BNavbarToggle} from "bootstrap-vue-3";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import UserIcon from "@/components/icons/UserIcon.vue";

export default {
  name: "navigation",
  components: {UserIcon, HomeIcon, BCollapse, BNavbar, BDropdownItem, BNavbarToggle, BNavbarNav, BNavbarBrand},

  data() {
    return {
      isLogedIn: false
    }
  }
}
</script>
<template>
  <b-navbar toggleable="lg" type="light" variant="light" class="fixed-top">
    <b-navbar-brand href="#">
      <home-icon></home-icon>
    </b-navbar-brand>
    <b-navbar-nav id="user">
      <b-nav-item href="#" v-if="!isLogedIn">
        <user-icon></user-icon>
      </b-nav-item>
      <b-nav-item href="#" v-if="isLogedIn">
        <b-button>Logout</b-button>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Unsere Zimmer</b-nav-item>
        <b-nav-item href="#">Anreise & Kontakt</b-nav-item>
        <b-nav-item href="#">Über Uns</b-nav-item>
        <b-nav-item href="#"> Impressum</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<style scoped>
#nav-collapse{
  justify-content: right;
}
.b-nav-item a:hover {
  color: hsla(160, 100%, 37%, 1);
  text-decoration: underline;
}
@media (max-width: 575.98px) {
  #user {
    margin-left:6rem;
  }
}

</style>

