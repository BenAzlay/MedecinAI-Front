<template>
  <div id="login">
    <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Username </label>
     <input required v-model="user.pseudo" type="text" placeholder="Username"/><br>
     <label>Password </label>
     <input required v-model="user.pwd" type="password" placeholder="Password"/>
     <b-form-checkbox
      id="checkbox-1"
      v-model="isPatient"
      name="checkbox-1"
      value= true
      unchecked-value= false
    >
      I am a patient
    </b-form-checkbox>
     <hr/>
     <button type="submit">Login</button>
   </form>
    <br/>
    <p>Don't have an account yet? <router-link to="/sign-up">Sign Up</router-link></p>
  </div>
  
</template>

<script>
import { APIService } from "../APIService";
import VueJwtDecode from 'vue-jwt-decode'
const apiService = new APIService();

export default {
  name: "Login",
  data() {
    return {
      user: {
        pseudo: "",
        pwd: ""
      }, //Can be a patient or a practionner
      
      isPatient: false
    };
  },
  methods: {
    login(){
      if (this.user.Pseudo != "" && this.user.pwd != "") { //IF credentials are entered
        if(this.isPatient)
        {
          apiService.loginPatient(this.user).then(token => { 
            //DECODAGE
            this.$parent.token = VueJwtDecode.decode(token.data.token);
            this.$router.replace({ name: "home" }); 
          });
        }
        else{
          apiService.loginPractitioner(this.user).then(token => { 
            //DECODAGE
            
            this.$parent.token64 = token.data.token;
            this.$parent.token = VueJwtDecode.decode(token.data.token);
            this.$router.replace({ name: "home" }); 
          });
        }
      } else console.log("A username and password must be present");
    }
  },
  mounted() {
    
  }
};


</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 50px;
  padding: 20px;
}
</style>
