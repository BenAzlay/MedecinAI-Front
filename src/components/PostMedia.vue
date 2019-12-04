<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Title:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="media.title"
          required
          placeholder="Title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Author:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="media.author"
          required
          placeholder="Author"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Year:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="media.year"
          required
          placeholder="Year"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Genre:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="media.genre"
          required
          placeholder="Genre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Type:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="media.type"
          required
          placeholder="Type"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="City:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="media.city"
          required
          placeholder="City"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { APIService } from "../APIService";
const apiService = new APIService();

export default {
    data() {
      return {
        media: {
          uploaderId: this.$parent.currentUser.id,
          title: '',
          author: '',
          year: '',
          genre: '',
          type: '',
          city: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit() {
        apiService.createMedia(this.media)
        this.$router.replace({ name: "list-media" });
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.media.title = ''
        this.media.author = ''
        this.media.year = ''
        this.media.genre = ''
        this.media.type = ''
        this.media.city = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>