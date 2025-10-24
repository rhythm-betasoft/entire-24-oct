    // src/main.js (or main.ts)
    import { createApp } from 'vue';
    import App from './App.vue';

    // Vuetify
    import 'vuetify/styles'; // Import Vuetify styles
    import { createVuetify } from 'vuetify';
    import * as components from 'vuetify/components';
    import * as directives from 'vuetify/directives';

    const vuetify = createVuetify({
      components,
      directives,
      // You can add other Vuetify configurations here, e.g., theme, icons
    });

    const app = createApp(App);
    app.use(vuetify); // Use Vuetify plugin
    app.mount('#app');