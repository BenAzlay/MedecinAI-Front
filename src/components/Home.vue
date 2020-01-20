<template>
  <div>
    <h1>Welcome to MedecinAI, {{ this.currentUser.firstname }} {{ this.currentUser.lastname }}</h1>
    <p>
      Made by: <br/>
      Benjamin AZOULAY <br/>
      Sebastien BERNARD <br/>
      Anil DEVADAS <br/>
      Maximilien FRAT LEPRINCE <br/>
      Mélanie MARQUES <br/>
      Kevin NAGELS <br/>
      Louis PRUD'HOMME <br/>
      Thomas SELVA <br/>
    </p>
    
  </div>
</template>

<script>
import { APIService } from "../APIService";
const apiService = new APIService();

export default {
  name: 'Home', //this is the name of the component
  data() {
    return {
      currentUser: [],
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser(){
      apiService.getPractitioner(this.$parent.token.Id, this.$parent.token64).then(data => {
          this.currentUser = data;
        });
      }

    
  }
  
}
</script>
<style>
</style>
