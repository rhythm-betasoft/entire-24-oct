    import { createRouter,createWebHistory } from "vue-router";
    import Home from '../views/Home.vue'
    import Products from '../views/Products.vue'
    import { components } from "vuetify/dist/vuetify.js";

    const routes=[
        {
            path:"/",
            name:"Home",
            component:Home
        },
        {
            path:"/Products",
            name:"Products",
            component:Products
        }
    ]

    const router=createRouter({
        history:createWebHistory(),
        routes
    })
    export default router