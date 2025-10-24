    <template>
    <h1>{{ msg }}</h1>

    <v-row>
       <v-col v-for="item in arr" :key="item.id" lg="4" md="4">
        <v-card>
            
  {{ item.title }}
  </v-card>
</v-col>

    </v-row>
    </template>

    <script>
    export default{
        name:"fetch",
        data(){
            return{
                msg:"Fetch",
                arr:[]
            }
        },
        mounted(){
            this.get()
        },
        methods:{
            get(){
                this.$api.get('/posts')
                .then(({data})=>{
                    console.log(data[0]);
                    this.arr=data
                })
            },
        }
    }
    </script>