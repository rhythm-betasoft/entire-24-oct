import { createWebHistory,createRouter } from "vue-router";
import products from '../views/products.vue';
import Home from '../views/Home.vue'
import { components } from "vuetify/dist/vuetify.js";

const routes = [
    {
        path:"/",
        name:'Home',
        component:Home
    },
    {
        path: "/products",
        name: 'products',
        component:products
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;