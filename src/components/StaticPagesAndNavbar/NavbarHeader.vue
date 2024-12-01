<script>
import {BCollapse, BDropdownItem, BNavbar, BNavbarBrand, BNavbarNav, BNavbarToggle} from "bootstrap-vue-3";
import IconUser from "@/components/Icons/IconUser.vue";
import IconHome from "@/components/Icons/IconHome.vue";


export default {
  name: "navigation",
  components: {IconUser, IconHome, BCollapse, BNavbar, BDropdownItem, BNavbarToggle, BNavbarNav, BNavbarBrand},

  data() {
    return {
      isLoggedIn: false
    }
  }
}
</script>
<template>
  <b-navbar toggleable="lg" type="light" variant="light" class="fixed-top" id="navbar">
    <b-navbar-brand to="/home">
      <icon-home></icon-home>
    </b-navbar-brand>
    <b-dropdown variant="link" right id="user">
      <template #button-content id="dropdown">
        <icon-user/>
      </template>
      <b-dropdown-item v-if="!isLoggedIn">
        <b-button variant="link" to="/login">Login</b-button>
      </b-dropdown-item>
      <b-dropdown-item>
        <b-button variant="link" to="/registration">Registrieren</b-button>
      </b-dropdown-item>
    </b-dropdown>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/rooms">Unsere Zimmer</b-nav-item>
        <b-nav-item to="/getting-here">Anreise & Kontakt</b-nav-item>
        <b-nav-item to="/about">Über Uns</b-nav-item>
        <b-nav-item to="/impressum"> Impressum</b-nav-item>
        <b-nav-item to="/login"> Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<style scoped>
#nav-collapse {
  justify-content: right;
}

.b-nav-item a:hover {
  color: hsla(160, 100%, 37%, 1);
  text-decoration: underline;

}
#user{
  margin-left: 200rem !important;
}
</style>

