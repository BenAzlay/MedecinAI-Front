<template>
  <div>
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" v-bind:key="patient.id">
          <th>{{ patient.id }}</th>
          <th>{{ patient.firstname }}</th>
          <th>{{ patient.lastname }}</th>
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
  name: "listPatients",
  data() {
    return {
      patients: []
    };
  },

  methods: {
    getPatients() {
      apiService.getPatients(this.$parent.token64).then(data => {
        this.patients = data;
      });
    }
  },

  mounted() {
    this.getPatients();
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
