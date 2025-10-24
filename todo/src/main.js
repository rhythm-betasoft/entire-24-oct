import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'; 
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import Swal from 'sweetalert2'

import router from './routes/router';

const vuetify = createVuetify({

});
    

createApp(App).use(vuetify).use(router).mount('#app')
