import {createApp} from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from "./router/routes.ts";
import { createPinia } from 'pinia'
import ConfirmationService from "primevue/confirmationservice";
import ToastService from 'primevue/toastservice';

import AdminLayout from "./layouts/AdminLayout.vue";


const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(router)
    .use(PrimeVue, {
        theme: {preset: Aura}
    })
    .use(ConfirmationService)
    .use(ToastService)
    .component('AdminLayout', AdminLayout)
    .mount('#app')