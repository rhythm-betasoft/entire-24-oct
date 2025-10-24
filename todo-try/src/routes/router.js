import { createRouter,createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import fetch from "../views/fetch.vue"
import Detail from "../views/Detail.vue"
const routes=[
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/About",
        name:"About",
        component:About
    },
    {
        path:"/fetch",
        name:"fetch",
        component:fetch
    },
    {
        path:"/Detail/:id",
        name:"Detail",
        component:Detail
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;