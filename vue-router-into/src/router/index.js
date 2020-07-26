import Home from "../views/Home";
import Users from "../views/Users";
import UserDetail from "../views/UserDetail";
import AdminHome from "../views/admin/AdminHome";

export const routes = [
    { path: '/', component:Home, name: 'home' },
    { path: '/users', component:Users, name: 'users' },
    { path: '/users/:id', component:Users, },
    { path: '/user-detail/:id', component:UserDetail, name: 'userDetail' },
    { path: '/admin', component:AdminHome, name: 'admin' },
]
