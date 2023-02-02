import {createRouter, createWebHistory} from "vue-router";
import Login from "../../views/Login.vue";
import AdminView from "../../views/Admin/AdminView.vue";
import Dashboard from "../components/Admin/Dashboard.vue";
import ReservationsComponent from "../components/Admin/ReservationsComponent.vue";

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
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;