import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router';
import api from './plugins/api.js'
 import 'vuetify/styles';
    import { createVuetify } from 'vuetify';
    import * as components from 'vuetify/components';
    import * as directives from 'vuetify/directives';

    const vuetify = createVuetify({
      components,
      directives,

    });
    const app=createApp(App)
    app.config.globalProperties.$api=api
app.use(vuetify).use(router).mount('#app');