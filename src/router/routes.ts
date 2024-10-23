import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import AdminView from "../views/AdminView.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import {useAuthStore} from "../store/authStore.ts";
// import {isTokenExpired} from "../utils/jwtUtils.ts";
//

const ifAuthenticated = (to, from, next) => {
    const store = useAuthStore()
    if(store.token !== ""){

        next()
        // !isTokenExpired(store.token) ? next() : next({path: '/connexion'})
    }else{
        next({path: '/connexion'})
    }
}


const routes = [
    { path: '/', component: HomeView },
    { path: '/admin', component: AdminView},
    { path: '/connexion', component: LoginView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router