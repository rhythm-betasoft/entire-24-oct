<template>
    <v-app-bar>
<router-link to="/" style="text-decoration: none;">
  <v-app-bar-title>Flipkart</v-app-bar-title>
</router-link>

        <v-spacer></v-spacer>
        <v-btn :to="{path:'/'}">Home</v-btn>
        <v-btn :to="{path:'/About'}">About</v-btn>
        <v-btn :to="{path:'/fetch'}">fetch</v-btn>
    </v-app-bar>
</template>

<script>
export default{
    name:"Header",
    data(){

    }
}
</script>