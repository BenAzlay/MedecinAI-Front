<template>
  <div id="app">
    <div v-if="authenticated">
      <b-nav tabs>
          <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item><router-link to="/list-users">List of Users</router-link> </b-nav-item>
          <b-nav-item><router-link to="/list-media">List of Media</router-link> </b-nav-item>
          <b-nav-item><router-link to="/post-media">Post Media</router-link> </b-nav-item>
          <b-nav-item><router-link to="/search">Search Media</router-link> </b-nav-item>
          <b-nav-item><router-link v-if="authenticated" to="/login"
          v-on:click.native="logout()"
          replace>Logout</router-link></b-nav-item>
      </b-nav>
    </div>
    <router-view @authenticated="setAuthenticated" :key="componentKey"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      authenticated: false,
      currentUser: {
        id: 0,
        username: "",
        password: ""
      }
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
