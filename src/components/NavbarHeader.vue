<script>
import {BCollapse, BDropdownItem, BNavbar, BNavbarBrand, BNavbarNav, BNavbarToggle} from "bootstrap-vue-3";
import IconUser from "@/components/icons/IconUser.vue";
import IconHome from "@/components/icons/IconHome.vue";


export default {
  name: "navigation",
  components: {IconUser, IconHome, BCollapse, BNavbar, BDropdownItem, BNavbarToggle, BNavbarNav, BNavbarBrand},

  data() {
    return {
      isLogedIn: false
    }
  }
}
</script>
<template>
  <b-navbar toggleable="lg" type="light" variant="light" class="fixed-top">
    <b-navbar-brand to="/">
      <icon-home></icon-home>
    </b-navbar-brand>
    <b-navbar-nav id="user">
      <b-nav-item href="#" v-if="!isLogedIn">
        <icon-user></icon-user>
      </b-nav-item>
      <b-nav-item href="#" v-if="isLogedIn">
        <b-button>Logout</b-button>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Unsere Zimmer</b-nav-item>
        <b-nav-item to="getting-here">Anreise & Kontakt</b-nav-item>
        <b-nav-item to="about">Über Uns</b-nav-item>
        <b-nav-item to="impressum"> Impressum</b-nav-item>
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
@media (max-width: 576px) {
  #user {
    margin-left:6rem;
  }
}

</style>

