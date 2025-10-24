<template>
<v-app-bar>
    <v-app-bar-title>123</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn :to="{path:'/'}">home</v-btn>
    <v-btn :to="{path:'/Products'}">products</v-btn>
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