<template>
  <v-container class="d-flex align-center justify-center">

    <v-card outlined style="max-width: 400px; margin-top: 150px; background-color:#81A7CC" >
        <v-img class="my-1" :src="post.image" height="200px"></v-img>

      <v-card-title class="text-center">{{ post.title }}</v-card-title>
      <v-card-title class="text-center"> MRP-${{ post.price }}</v-card-title>
      <v-card-text>{{ post.description }}</v-card-text>
      <v-card-actions>
        <v-btn @click="$router.back()" class="mb-4 ml-auto">Back</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    const postId = this.$route.params.id;
    this.$api.get(`/products/${postId}`).then(({ data }) => {
      this.post = data;
    });
  },
};
</script>
