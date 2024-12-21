import {createRouter, createWebHistory} from 'vue-router'
import LandingpageView from "@/views/LandingpageView.vue";
import ImpressumView from "@/views/ImpressumView.vue";
import AboutView from "@/views/AboutView.vue";
import GettingHereView from "@/views/GettingHereView.vue"
import RoomDetailAndAvailabilityView from "@/views/RoomDetailAndAvailabilityView.vue";
import RoomsSummary from "@/views/RoomsCardsView.vue";
import RoomBookingView from "@/views/RoomBookingView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import LoginView from "@/views/LoginView.vue";
import BookingConformationView from "@/views/BookingConformationView.vue";
import OrderConformationView from "@/views/OrderConformationView.vue";



const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        if (to.params.scrollTo === 'availability') {
            return {el: '#availability'};
        }
        return {top: 0, left: 0}
    },
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
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
            path: '/room-detail/:roomId/:scrollTo?',
            name: 'roomDetail',
            component: RoomDetailAndAvailabilityView,
            props: true
        },

        {
            path: '/rooms',
            name: 'rooms',
            component: RoomsSummary
        },

        {
            path: '/room-booking',
            name: 'room-booking',
            component: RoomBookingView
        },

        {
            path: '/order-confirmation',
            name: 'order-confirmation',
            component: OrderConformationView
        },

        {
            path: '/booking-conformation',
            name: 'booking-conformation',
            component: BookingConformationView
        },

        {
            path: '/registration',
            name: 'registration',
            component: RegistrationView
        },

        {
            path: '/login',
            name: 'login',
            component: LoginView

        },
    ]
})

export default router
