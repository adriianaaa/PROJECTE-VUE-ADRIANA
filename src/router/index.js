import { createRouter, createWebHistory } from 'vue-router';
// Importa les vistes correctament des de /src/views
import Home from '../views/Home.vue';
import Personatges from '../views/Personatges.vue';
import Crud from '../views/Crud.vue';

const routes = [
  // Ruta per la pàgina d'inici
  { path: '/', component: Home },
  // Ruta per la pàgina de personatges (API)
  { path: '/personatges', component: Personatges },
  // Ruta per la pàgina de CRUD
  { path: '/crud', component: Crud }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
