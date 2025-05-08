import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)  // Assegura't d'utilitzar el router
  .mount('#app');
