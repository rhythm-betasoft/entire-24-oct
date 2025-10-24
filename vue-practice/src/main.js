// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

// Create Vuetify instance
const vuetify = createVuetify()

// Create Vue app
const app = createApp(App)

// Use Vuetify plugin
app.use(vuetify)

// Mount app
app.mount('#app')
