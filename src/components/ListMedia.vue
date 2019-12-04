<template>
  <div>
    <b-table
      selectable
      :select-mode="selectMode"
      :items="medias"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      @row-selected="onRowSelected"
      responsive="sm"
    >
    <template v-slot:cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </b-table>

    <b-button variant="primary" v-on:click="deleteMedia">Delete</b-button>
<br/><br/>
    <table class="table table-bordered table-hover">
        <col width="20">
        <col>
      <thead>
        <tr>
          <th>Commenter</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in mediaComments" v-bind:key="comment.id">
          <th>{{ comment.commenterId }}</th>
          <th>{{ comment.content }}</th>
        </tr>
      </tbody>
    </table>

    <h5 align='left'>Write a comment</h5>
    <b-form @submit="onSubmit">
        <b-form-textarea
          id="textarea"
          v-model="newComment.content"
          placeholder="Speak your mind..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>


      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

    
    
    </div>
</template>

<script>
import { APIService } from "../APIService";

const apiService = new APIService();

export default {
  name: "listMedia",
  data() {
    return {
        medias: [],
        comments: [],
        mediaComments: [],
        selectedMedia: [],
        sortBy: 'id',
        sortDesc: false,
        selectMode: 'single',
        fields: [
            'selected',
            { key: 'id', sortable: true },
            { key: 'uploaderId', sortable: true },
            { key: 'title', sortable: true },
            { key: 'author', sortable: true },
            { key: 'year', sortable: true },
            { key: 'genre', sortable: true },
            { key: 'type', sortable: true },
            { key: 'city', sortable: true },
        ],
        newComment: {
          mediaId: null,
          commenterId: this.$parent.currentUser.id,
          content: '',
          canDelete: false,
        }
    };
  },

  methods: {
    getMedias() {
      apiService.getMedias().then(data => {
        this.medias = data;
      });
    },
    getComments() {
      apiService.getComments().then(data => {
        this.comments = data;
      });
    },
    onRowSelected(items) {
        this.selectedMedia = items
        this.mediaComments = []
        this.newComment.mediaId = this.selectedMedia[0].id
        this.comments.forEach((comment) => {
            if(comment.mediaId == this.selectedMedia[0].id)
            {
                this.mediaComments.push(comment);
            }
        })
    },
    onSubmit() {
        if(this.newComment.mediaId != null){
          apiService.createComment(this.newComment)
          this.newComment.content = ''
          this.$router.replace({ name: "search" });
        }
        
    },
    deleteMedia(){
      if(this.$parent.currentUser.id == this.selectedMedia[0].uploaderId){
        console.log("Checked")
        apiService.deleteMedia(this.selectedMedia[0])
        this.$router.replace({ name: "search" });
        
      }
    }

  },

  mounted() {
    this.getMedias();
    this.getComments();
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