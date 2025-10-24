<template>

<v-row>
    <v-col>
        <v-card>
            {{ obj.title }}
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default{
    data(){
        return{
            msg:"",
            obj:{}

        }
    },
    mounted(){
        this.get()
    },
    methods:{
        get(){
            const id=this.$route.params.id;
            this.$api.get(`/posts/${id}`)
            .then(({data})=>{
                console.log(data)
                this.obj=data
            })
        }
    }
}
</script>