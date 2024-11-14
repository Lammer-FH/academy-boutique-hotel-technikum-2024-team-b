import {createRouter, createWebHistory} from 'vue-router'
import LandingpageView from "@/views/LandingpageView.vue";
import ImpressumView from "@/views/ImpressumView.vue";
import AboutView from "@/views/AboutView.vue";
import GettingHereView from "@/views/GettingHereView.vue"
import RoomDetailAndAvailabilityView from "@/views/RoomDetailAndAvailabilityView.vue";
import RoomsSummary from "@/views/RoomsCardOverview.vue";


const router = createRouter({
    scrollBehavior() {
        return {top: 0, left: 0}
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
            path: '/roomDetails',
            name: 'roomDetail',
            component: RoomDetailAndAvailabilityView,
        },

        {
            path: '/rooms',
            name: 'rooms',
            component: RoomsSummary
        }

    ]
})

export default router
