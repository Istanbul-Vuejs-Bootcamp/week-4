import Home from "../views/Home";
import Users from "../views/Users";
import AdminHome from "../views/admin/AdminHome";
export const routes = [
    { path: '/', component:Home, name: 'home' },
    { path: '/users', component:Users, name: 'users' },
    { path: '/user/:id', component:Users, name: 'user' },
    { path: '/admin', component:AdminHome, name: 'admin' },

]
