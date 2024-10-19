import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from "@/views/ImpressumView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/impressum',
      name: 'ImpressumView',
      component: ImpressumView
    },
  ]
})

export default router