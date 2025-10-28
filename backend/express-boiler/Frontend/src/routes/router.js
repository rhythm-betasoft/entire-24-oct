import { createRouter, createWebHistory } from "vue-router";
import Register from "../views/Register.vue";
import Profile from '../views/Profile.vue'
const routes = [
  {
    name: "Register",
    path: "/",
    component: Register,
  },
  {
    name:"Profile",
    path:"/Profile",
    component:Profile
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
