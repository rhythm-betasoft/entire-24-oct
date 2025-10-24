<template>
  <div>
    <p>{{ msg }}</p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
    <p v-if="error" style="color: red;">Error: {{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios'; 

export default {
  data() {
    return {
      msg: "Hello Products",
      products: [],
      error: null
    };
  },
  async mounted() {  
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      this.products = response.data;  
    } catch (err) {
      this.error = err.message || 'Failed to fetch data';
    }
  }
};
</script>
