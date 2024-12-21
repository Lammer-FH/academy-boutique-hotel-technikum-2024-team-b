import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import BootstrapVue3 from 'bootstrap-vue-3'
import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import {useRoomsStore} from "@/stores/RoomsStore";
import {useUserStore} from "@/stores/UserStore";

const app = createApp(App)

app.use(createPinia())
app.use(router)
await useUserStore().initializeAuthentication()
await useRoomsStore().fetchRooms()
app.use(BootstrapVue3)
router.isReady().then(() => {
    app.mount('#app');
});
