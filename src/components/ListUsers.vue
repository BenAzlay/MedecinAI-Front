<template>
  <div>
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id">
          <th>{{ user.id }}</th>
          <th>{{ user.username }}</th>
          <th>{{ user.password }}</th>
        </tr>
      </tbody>
    </table>
    <div></div>
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
