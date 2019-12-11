<template>
  <div>
      <h2>After an in-depth analysis, our cutting-edge AI has generated the following diagnosis:</h2>
      <br/>
      <img src="@/images/dead.jpg">
  </div>
</template>

<script>
import { APIService } from "../APIService";

const apiService = new APIService();

export default {
  name: "listUsers",
  data() {
    return {
      users: []
    };
  },

  methods: {
    getUsers() {
      apiService.getUsers().then(data => {
        this.users = data;
      });
    }
  },

  mounted() {
    this.getUsers();
  }
};
</script>

<style scoped>
.list-group {
  margin-bottom: 15px;
}
.list-group-item:hover {
  background: #eee;
}
.selected {
  background: lightblue;
}
.correct {
  background: lightgreen;
}
.incorrect {
  background: red;
}
</style>
