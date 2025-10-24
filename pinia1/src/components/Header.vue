<template>
     <v-app-bar>
        <v-app-bar-title>hello</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn :to="{path:'/'}">home</v-btn>
        <v-btn :to="{path:'/Products'}">products</v-btn>
        <v-btn :to="{path:'/toDo'}">To-Do</v-btn>
        <v-btn :to="{path:'/Cart'}">Cart</v-btn>
      </v-app-bar>
</template>

<script>
export default{
    name:"Header",
    data(){
        return{

        }
    }
}
</script>