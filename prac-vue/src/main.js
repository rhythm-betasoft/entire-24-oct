import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import api from './plugins/api.js';
import 'vuetify/styles';
import router from './routes/router.js';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.config.globalProperties.$api = api;

app.use(vuetify).use(router).mount('#app');
