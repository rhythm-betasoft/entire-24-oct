<template>
    <v-app-bar color="#E8E1C6">
        <v-btn :to="{path:'/'}">Register</v-btn>
         <v-spacer style="height: 5px;"></v-spacer>
        <v-btn :to="{path:'/Profile'}">Profile</v-btn>
        <v-btn class="mr-10" @click="logout()">logout</v-btn>
    </v-app-bar>
</template>

<script>
import {authStore} from '../store/authStore.js'
export default{
    name:"Navbar",
    data(){
        
    },
    methods:{
        logout(){
            const store=authStore();
            store.logout();
             this.$router.push('/');
        }
    }
}
</script>