<script>
import {BCollapse, BDropdownItem, BNavbar, BNavbarBrand, BNavbarNav, BNavbarToggle} from "bootstrap-vue-3";
import IconUser from "@/components/Icons/IconUser.vue";
import IconHome from "@/components/Icons/IconHome.vue";
import {useUserStore} from "@/stores/UserStore";
import IconLogIn from "@/components/Icons/IconLogIn.vue";

export default {
  name: "navigation",
  components: {
    IconLogIn,
    IconUser,
    IconHome,
    BCollapse,
    BNavbar,
    BDropdownItem,
    BNavbarToggle,
    BNavbarNav,
    BNavbarBrand,
  },

  data() {
    return {
      userStore: useUserStore(),
    };
  },

  computed: {
    isLoggedIn() {
      return useUserStore().isAuthenticated
    },
  },

  methods: {
    logout() {
      this.userStore.logout();
      alert("You are logged out");
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <b-navbar toggleable="lg" type="light" variant="light" class="fixed-top" id="navbar">
    <b-navbar-brand to="/">
      <icon-home></icon-home>
    </b-navbar-brand>
    <b-dropdown variant="link" class="ms-auto" right>
      <template #button-content>
        <div v-if="isLoggedIn">
        <icon-user/>
        </div>
        <div v-if="!isLoggedIn">
          <icon-log-in/>
        </div>
      </template>
      <div class="d-flex flex-column align-items-center">
        <b-dropdown-item v-if="!isLoggedIn">
          <b-button variant="outline-dark" to="/login">Login</b-button>
        </b-dropdown-item>
        <b-dropdown-item v-if="isLoggedIn">
          <b-button variant="outline-danger" @click="logout">Logout</b-button>
        </b-dropdown-item>
        <b-dropdown-item>
          <b-button v-if="!isLoggedIn" variant="outline-dark" to="/registration">Registrieren</b-button>
        </b-dropdown-item>
      </div>
    </b-dropdown>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/rooms">Unsere Zimmer</b-nav-item>
        <b-nav-item to="/getting-here">Anreise & Kontakt</b-nav-item>
        <b-nav-item to="/about">Über Uns</b-nav-item>
        <b-nav-item to="/impressum">Impressum</b-nav-item>
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
