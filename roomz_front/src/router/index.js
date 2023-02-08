import {createRouter, createWebHistory} from "vue-router";
import Login from "../../views/Login.vue";
import AdminView from "../../views/Admin/AdminView.vue";
import Dashboard from "../components/Admin/Dashboard.vue";
import ReservationsComponent from "../components/Admin/ReservationsComponent.vue";
import GuestsComponent from "../components/Admin/GuestsComponent.vue";
import SeasonsComponent from "../components/Admin/SeasonsComponent.vue";
import BreakfastComponent from "../components/Admin/BreakfastComponent.vue";
import RoomsComponent from "../components/Admin/RoomsComponent.vue";

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/app',
        component: AdminView,
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
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

export default router;