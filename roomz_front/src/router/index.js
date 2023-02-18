import {createRouter, createWebHistory} from "vue-router";
import Login from "../../views/Login.vue";
import AdminView from "../../views/Admin/AdminView.vue";
import Dashboard from "../components/Admin/Dashboard.vue";
import ReservationsComponent from "../components/Admin/ReservationsComponent.vue";
import GuestsComponent from "../components/Admin/GuestsComponent.vue";
import SeasonsComponent from "../components/Admin/SeasonsComponent.vue";
import BreakfastComponent from "../components/Admin/BreakfastComponent.vue";
import RoomsComponent from "../components/Admin/RoomsComponent.vue";
import {useUserStore} from "../stores/UserStore.js";

const routes = [
    {
        path: '/login',
        name: 'login',
        meta: {
            requiresGuest : true
        },
        component: Login
    },
    {
        path: '/app',
        name:'app',
        redirect: '/app/dashboard',
        component: AdminView,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/app/dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
            {
                path: 'reservations',
                name: 'reservations',
                component: ReservationsComponent
            },
            {
                path: 'guests',
                name: 'guests',
                component: GuestsComponent
            },
            {
                path: 'seasons',
                name: 'seasons',
                component: SeasonsComponent
            },
            {
                path: 'breakfast',
                name: 'breakfast',
                component: BreakfastComponent
            },
            {
                path: 'rooms',
                name: 'rooms',
                component: RoomsComponent
            }

        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link'
})

router.beforeEach((to, from, next) => {
    const store = useUserStore();

    if(to.meta.requiresAuth && !store.$state.isLoggedIn){
        console.log('1');
    }
    else if(to.meta.requiresGuest && store.$state.isLoggedIn){
        console.log('2');
        next();
    }
    else{
        console.log('3');
        next();
    }
})

export default router;