<template>
  <div>
      <input type="number" v-model="mriId" placeholder="Select patient ID" @change="getSlices"/><br>
      <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Probability</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="slice in slices" v-bind:key="slice.id">
          <th>{{ slice.id }}</th>
          <th>{{ slice.probability }}</th>
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
      mriId: null,
      slices: [],
      options: [
          { value: null, text: 'Please select an option' },
        ]
    };
  },

  methods: {
    getSlices() {
      if(this.mriId > 0){
        apiService.getMRISlices(this.mriId, this.$parent.token64).then(data => {
          this.slices = data;
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
