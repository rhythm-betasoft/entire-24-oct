<template>
<h1 class="text-center">{{ msg }}</h1>
<v-row>
    <v-col v-for="item in arr" :key="item.id" md="4" lg="4">
        <v-card>
            <v-card-title>{{ item.title }}</v-card-title>
           <v-card-actions class="justify-center">
  <v-btn color="red" @click="del(item.id)">Delete</v-btn>
   <v-btn color="light-blue" @click="view(item)">View</v-btn>
</v-card-actions>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default{
    name:"Home",
    data(){
        return{
        msg:"hello",
        arr:[]
        }
    },
    mounted(){
        this.get()
    },
    methods:{
        get(){
            this.$api.get('/products')
            .then(({data})=>{
                this.arr=data
                console.log(data);
            })
        },
        del(id){
            this.arr = this.arr.filter((item) => item.id !== id);   
        },
        view(item){
            this.$router.push(`/Detail/${item.id}`)
        }
    }
}
</script>