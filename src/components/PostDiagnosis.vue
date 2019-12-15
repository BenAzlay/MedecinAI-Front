<template>
  <div>
    <div class="large-12 medium-12 small-12 cell">
      <input type="number" v-model="mri.patient" placeholder="Select patient ID"/><br><br>
      <base64-upload class="mri"
      @change="onChangeImage"></base64-upload><br><p>{{ filename }}</p><br>
      <datetime type="datetime" v-model="mri.realized" placeholder="Select date"></datetime><br><br>
      <b-button v-on:click="submitMRI()">Submit</b-button>
      
    </div>
  </div>
</template>

<script>
import Base64Upload from '../Base64Upload.vue'
//<input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/><br><br>
import { APIService } from "../APIService";
const apiService = new APIService();


export default {
    components: {
      Base64Upload
    },
    data() {
      return {
        mri: {
          patient: null,
          realized: null,
          imgpath: null
        },
        filename: '',
      }
    },
    mounted(){
    },
    methods: {
      submitMRI(){
        console.log(this.mri.imgpath);
        this.mri.patient = parseInt(this.mri.patient);
        apiService.postMRI(this.mri, this.$parent.token64);
      },
      onChangeImage(file) {
        /*
        {
          size: 93602,
          filetype: 'image/jpeg',
          name: 'user.jpg',
          base64:   '/9j/4AAQSkZJRg...'
        }
        */
       this.mri.imgpath = file.base64;
       this.filename = file.name;
       console.log(this.mri.imgpath)
      }
    }
}
</script>

<style>
.mri {
  width: 128px;
  height: 128px;

}
</style>