<template>
<v-container>
    <v-row>
        <v-col v-for="item in arr" :key="item.id"  cols="12" sm="6" md="3">
            <v-card style="height: 300px;">
                <v-img :src="item.image" style="height: 200px;"></v-img>
                <v-btn color="primary"> view more</v-btn>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            arr: []
        }
    },
    mounted() {
        this.get()
    },
    methods: {
        get() {
            this.$api.get('/products')
                .then(({ data }) => {
                    this.arr = data
                    console.log(data)
                })
        }
    }
}
</script>