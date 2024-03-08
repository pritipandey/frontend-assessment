import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../components/dashboard.vue';
import List from '../components/list.vue';
const routes = [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    },
  ];
const  router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;