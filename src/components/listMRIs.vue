<template>
  <div>
      <input type="number" v-model="patientId" placeholder="Select patient ID" @change="getMRIs"/><br>
      <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Realized</th>
          <th>Image Path</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mri in mris" v-bind:key="mri.id">
          <th>{{ mri.id }}</th>
          <th>{{ mri.realized }}</th>
          <th>{{ mri.imgpath }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { APIService } from "../APIService";

const apiService = new APIService();

export default {
  name: "results",
  data() {
    return {
      patientId: null,
      mris: [],
      patients: [],
      options: [
          { value: null, text: 'Please select an option' },
        ]
    };
  },

  methods: {
    getMRIs() {
      if(this.patientId > 0){
        apiService.getPatientMRIs(this.patientId, this.$parent.token64).then(data => {
          this.mris = data;
        });
      }

    },
  },
  

  mounted() {
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
