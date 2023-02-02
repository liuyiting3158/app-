import Index from "../pages/Index.vue";
import Mine from "../pages/mine.vue";
import Statistics from "../pages/statistics.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

const routes=[
    {
        path: '/',
        component: Index,
    },
    {
        path: '/user',
        component: Mine
    },
    {
        path:"/statistics",
        component: Statistics,
    },
    {
        path: '/user/login',
        component: Login
    },
    {
        path: '/user/register',
        component: Register,
    }
]


export default routes
