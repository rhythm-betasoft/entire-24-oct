import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import FooterComponent from '../components/FooterComponent.vue'; 

const routes = [
  {
    path: '/',
    components: {   
      default: HelloWorld,    
      footer: FooterComponent 
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
