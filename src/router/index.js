import {createRouter, createWebHistory} from 'vue-router'
import LandingpageView from "@/views/LandingpageView.vue";
import ImpressumView from "@/views/ImpressumView.vue";
import AboutView from "@/views/ImpressumView.vue";
import GettingHereView from "@/views/GettingHereView.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: LandingpageView
        },
        {
            path: '/impressum',
            name: 'impressum',
            component: ImpressumView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/getting-here',
            name: 'gettingHere',
            component: GettingHereView
        },

    ]
})

export default router
