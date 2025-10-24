<template>
    <v-app-bar color="#1F1F1F" dark>

        <router-link to="/" style="text-decoration: none; color:inherit ;">
            <v-toolbar-title class="ml-5">My App</v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>
        <v-btn color="white" to="/products">
            Products
        </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    name: 'HeaderComponent'
}
</script>
