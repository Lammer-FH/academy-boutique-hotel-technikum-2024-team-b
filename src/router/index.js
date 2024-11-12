import { createRouter, createWebHistory } from 'vue-router';
import LandingpageView from "@/views/LandingpageView.vue";
import ImpressumView from "@/views/ImpressumView.vue";
import AboutView from "@/views/AboutView.vue";
import GettingHereView from "@/views/GettingHereView.vue";
import ZimmerbuchenView from "@/views/ZimmerbuchenView.vue";
import BuchungsbesteatigungView from "@/views/BuchungsbesteatigungView.vue";

// Create the router instance
const router = createRouter({
    scrollBehavior() {
        return { top: 0, left: 0 };
    },
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
        {
            path: '/zimmerbuchen',
            name: 'zimmerbuchen',
            component: ZimmerbuchenView
        },
        {
            path: '/buchungsbestaetigung',
            name: 'buchungsbestaetigung',
            component: BuchungsbesteatigungView
        }
    ]
});

export default router;
