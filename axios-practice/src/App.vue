<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Appbar</v-toolbar-title>
    </v-app-bar>

    <!-- Main Content Area -->
    <v-main>
      <v-container class="mt-5">
        <h1 class="text-h4 mb-4">Axios</h1>

        <v-row>
          <v-col v-for="post in posts" :key="post.id" cols="12" md="6" lg="4">
            <v-card class="mb-4" outlined style="background-color: transparent;">
              <v-card-title>{{ post.title }}</v-card-title>
              <v-card-actions>
                <v-btn color="red" @click="deletePost(post.id)">Delete</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


 
<script>
export default {
  data() {  
    return {
      posts: [],
    };
  },
 
  mounted() {
    this.getPosts();
  },
 
  methods: {
    getPosts() {
      this.$apiService
        .get('/posts')
        .then(({ data }) => {
          this.posts = data;
          console.log(data);
        })
        .catch((err) => {
          console.error('Error fetching posts:', err);
        });
    },
  },
};
</script>