import { createApp, h } from 'vue';
import App from './App.vue';
import router from './routes/router.js';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';

// Create Pinia instance
const pinia = createPinia();
pinia.use(piniaPersist); // Plugin to persist store state

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});

createApp(App).use(router).use(vuetify).use(pinia).mount('#app');
