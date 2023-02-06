import Index from "../pages/Home.vue";
import Mine from "../pages/user.vue";
import Statistics from "../pages/statistics.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import SearchPage from "../pages/SearchPage.vue";
import Deal from "../pages/Deal.vue";

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
    },
    {
        path: '/search',
        component: SearchPage
    },
    {
        path: '/deal',
        component: Deal
    }
]


export default routes
