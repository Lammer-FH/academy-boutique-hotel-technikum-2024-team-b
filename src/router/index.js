import { createRouter, createWebHashHistory } from 'vue-router';
import AppImpressum from '@/components/AppImpressum.vue';

const routes = [
  { path: '/', redirect: '/impressum' }, // Redirect root to /impressum
  { path: '/impressum', component: AppImpressum },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
