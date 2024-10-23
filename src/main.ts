import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from "./router/routes.ts";
import { createPinia } from 'pinia'
import ConfirmationService from "primevue/confirmationservice";
import AdminLayout from "./layouts/AdminLayout.vue";


const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(ConfirmationService)
    .use(router)
    .use(PrimeVue, {
        theme: {preset: Aura}
    })
    .component('AdminLayout', AdminLayout)
    .mount('#app')