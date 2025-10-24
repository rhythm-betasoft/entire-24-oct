<template >
    <v-container>
        <v-row>
            <v-col v-for="item in arr" :key="item.id" cols="12" sm="6" md="3">
                <v-card height="300px">
                    <v-img class="my-1" :src="item.image" height="200px"></v-img>
                    <v-card-title>{{ item.title }}</v-card-title>
                    <div class="d-flex justify-center align-center">
                        <v-btn color="blue" @click="c.addtocart(item)">Add To Cart</v-btn>
                        <v-btn color="green" class="mx-3" @click="view(item.id)">View More</v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { useProdStore } from '../store/CartStore'

export default {
  data() {
    return {
      arr: []
    }
  },
  computed: {
    c() {
      return useProdStore()
    }
  },
  mounted() {
    this.get()
  },
  methods: {
    get() {
      this.$api.get('/products')
        .then(({ data }) => {
          console.log(data)
          this.arr = data
        })
    },
    view(id) {
      this.$router.push({ name: 'ProdDetail', params: { id } })
    }
  }
}
</script>

