<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Hello, Welcome to the Home Page</h1>
    <p>This is the Home page of the app!</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home', // This name helps with debugging and identifying the component/page
  data() {
    return {
      // You can add data properties here if needed
      welcomeMessage: 'Welcome to the Home Page'
    };
  },
  methods: {
    // Add methods here if necessary
  },
  computed: {
    // You can add computed properties here if needed
  },
};
</script>

<style scoped>
/* You can add some page-specific styles here */
h1 {
  color: #42b983;
}
</style>
