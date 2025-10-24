<template>
  <header class="header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.header {
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
}
h1 {
  font-size: 2rem;
  margin: 0;
}
</style>
