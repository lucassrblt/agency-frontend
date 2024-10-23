import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from "./router/routes.ts";
import { createPinia } from 'pinia'


const pinia = createPinia()
createApp(App)
    .use(pinia)
    .use(router)
    .use(PrimeVue, {
        theme: {preset: Aura}
    })
    .mount('#app')