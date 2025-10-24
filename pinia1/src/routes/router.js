import { createRouter,createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue"
import toDo from "../views/toDo.vue"
import Cart from  "../views/Cart.vue"
import ProdDetail from "../views/ProdDetail.vue";
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
    },
    {
        path:"/toDo",
        name:"toDo",
        component:toDo
    },
    {
        path:"/ProdDetail/:id",
        name:"ProdDetail",
        component:ProdDetail
    },
    {
        path:"/Cart",
        name:"Cart",
        component:Cart
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;