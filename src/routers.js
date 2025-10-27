import HomeView from "./components/HomeView.vue";
import LoginPage from "./components/LoginPage.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import TicketCreate from "./components/TicketCreate.vue";
import TicketUpdate from "./components/TicketUpdate.vue";
import AppHome from "./components/AppHome.vue";

const routes = [
    {
        name: 'HomeView',
        component: HomeView,
        path: '/'
    },
    {
        name: 'SignUp',
        component:SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/log-in'
    },
    {
        name: 'AppHome',
        component: AppHome,
        path: '/home'
    },
    {
        name: 'TicketCreate',
        component: TicketCreate,
        path: '/create'
    },
    {
        name: 'TicketUpdate',
        component: TicketUpdate,
        path: '/update/:id'
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;