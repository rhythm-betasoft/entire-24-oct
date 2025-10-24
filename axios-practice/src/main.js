import { createApp } from 'vue';
import App from './App.vue';
import api from './plugins/api';
 
 import 'vuetify/styles'; 
    import { createVuetify } from 'vuetify';
    import * as components from 'vuetify/components';
    import * as directives from 'vuetify/directives';

    const vuetify = createVuetify({

    });

    const app = createApp(App);

    app.use(vuetify);
 
 
app.config.globalProperties.$apiService = api;
// app.provide('apiService', api);
 
app.mount('#app');