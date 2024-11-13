import {createRouter, createWebHistory} from 'vue-router'
import AdminView from "../views/AdminView.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AdminAd from "../views/AdminAd.vue";
import AdminCreateView from "../views/AdminCreateView.vue";
import {useAuthStore} from "../store/authStore.ts";
// import {isTokenExpired} from "../utils/jwtUtils.ts";
//

// const ifAuthenticated = (to, from, next) => {
//     const store = useAuthStore()
//     if(store.token !== ""){
//
//         next()
//         // !isTokenExpired(store.token) ? next() : next({path: '/connexion'})
//     }else{
//         next({path: '/connexion'})
//     }
// }


const isAuthenticated = (to, from, next) => {
    // Check du token

    next({path: '/login'})
}


const routes = [
    {path: '/', component: HomeView},
    {
        path: '/admin', component: AdminView,
        meta: {
            layout: "Admin"
        },
        // beforeEnter: isAuthenticated add to protect route
    },
    {
        path: '/admin/:id',
        component: AdminAd,
        meta: {layout: "Admin"},
        props: {pageName: 'Modification d\'une annonce'}
    },
    {
        path: '/admin/create', component: AdminAd, meta: {layout: "Admin"}, props: {pageName: 'Création d\'une annonce'}
    },
    {path: '/login', component: LoginView},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router