<script>
import {BCollapse, BDropdownItem, BNavbar, BNavbarBrand, BNavbarNav, BNavbarToggle} from "bootstrap-vue-3";
import IconUser from "@/components/Icons/IconUser.vue";
import IconHome from "@/components/Icons/IconHome.vue";
import {useUserStore} from "@/stores/UserStore";


export default {
  name: "navigation",
  components: {IconUser, IconHome, BCollapse, BNavbar, BDropdownItem, BNavbarToggle, BNavbarNav, BNavbarBrand},


  computed: {
    isLoggedIn() {
      return useUserStore().token !== null;

    }
  },
  methods: {
    logout() {
      const userStore = useUserStore()
      userStore.logout()
      this.$router.push("/home")
    }
  }
}
</script>
<template>
  <b-navbar toggleable="lg" type="light" variant="light" class="fixed-top" id="navbar">
    <b-navbar-brand to="/home">
      <icon-home></icon-home>
    </b-navbar-brand>
    <b-dropdown variant="link" class="ms-auto" id="dropdown" right>
      <template #button-content>
        <icon-user/>
      </template>
      <b-dropdown-item v-if="!isLoggedIn">
        <b-button variant="outline-info" to="/login">Login</b-button>
      </b-dropdown-item>
      <b-dropdown-item v-if="isLoggedIn">
        <b-button variant="outline-danger" @click="logout">Logout</b-button>
      </b-dropdown-item>
      <b-dropdown-item>
        <b-button variant="outline-info" to="/registration">Registrieren</b-button>
      </b-dropdown-item>
    </b-dropdown>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/rooms">Unsere Zimmer</b-nav-item>
        <b-nav-item to="/getting-here">Anreise & Kontakt</b-nav-item>
        <b-nav-item to="/about">Über Uns</b-nav-item>
        <b-nav-item to="/impressum"> Impressum</b-nav-item>
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
</style>

