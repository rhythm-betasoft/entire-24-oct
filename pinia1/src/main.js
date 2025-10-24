import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'; 
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './routes/router';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import api from './plugins/api';
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app=createApp(App);
 app.config.globalProperties.$api=api
const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify).use(pinia).use(router).mount('#app')
