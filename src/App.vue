<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand :to="{ name: 'home' }">
            <img src="@/images/MedecinAILogo.png" alt="Logo" width="72" height="48">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
            <b-nav-item :to="{ name: 'list-patients' }">Patient Database</b-nav-item>
            <b-nav-item :to="{ name: 'list-mri' }">MRI Database</b-nav-item>
            <b-nav-item :to="{ name: 'post-diagnosis' }">New diagnosis</b-nav-item>
            <b-nav-item :to="{ name: 'results' }">Results</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{ name: 'login' }" v-if="authenticated" @click="logout">
            Log Out
            </b-nav-item>
            <b-nav-item :to="{ name: 'login' }" v-if="!authenticated">
            Log In
            </b-nav-item>
            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
        </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <br/>
    <router-view @authenticated="setAuthenticated"></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  },
  data() {
    return {
      token: [],
      token64: '',
      authenticated: false,
      currentUserId: 0
    };
  },
  mounted() {
    if(!this.authenticated) {
        this.$router.replace({ name: "login" });
    }
  },
  methods: {
      setAuthenticated(status) {
          this.authenticated = status;
      },
      logout() {
          this.authenticated = false;
          this.token = [];
          this.token64 = '';
      }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
