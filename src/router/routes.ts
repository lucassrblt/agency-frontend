import {createRouter, createWebHistory} from 'vue-router'
import AdminView from "../views/AdminView.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AdminAd from "../views/AdminAd.vue";
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


const routes = [
    { path: '/', component: HomeView },
    { path: '/admin/annonce', component: AdminView, children : [
            {
                path : "/:id",
                component: AdminAd
            }
        ],
    meta : {
        layout: "Admin"
    }
    },
    { path: '/connexion', component: LoginView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router