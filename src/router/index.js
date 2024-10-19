import {createRouter, createWebHistory} from 'vue-router'
import LandingpageView from "@/views/LandingpageView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: LandingpageView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/getting-here',
            name: 'getting-here',
            component: GettingHereView
        },
        {
            path: '/impressum',
            name: 'impressum',
            component: ImpressumView
        },
    ]
})

export default router
