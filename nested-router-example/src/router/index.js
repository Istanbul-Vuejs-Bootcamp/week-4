import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from "../components/Header";
Vue.use(VueRouter)

const publicRoutes = ['/login', '/register'];
  const routes = [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        'header-top': Header,
      }
    },
    {
      path: '/users',
      name: 'Users',
      beforeEnter: ((to, from, next) => {
        console.log('local before Enter');
        next();
      }),
      components: {
        default: () => import(/* webpackChunkName: "about" */ '../views/users/Users.vue'),
        'header-bottom': Header,
      },
      children: [
        {
          path: 'list',
          name: 'UserList',
          component: () => import(/* webpackChunkName: "about" */ '../views/users/UserList.vue')
        },
        {
          path: 'detail/:id',
          name: 'UserDetail',
          component: () => import(/* webpackChunkName: "about" */ '../views/users/UserDetail.vue')
        },

      ]
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/home'),
      },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ '../views/Login'),
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: () => import(/* webpackChunkName: "about" */ '../views/admin/Login'),
    },
    { path: '/redirect', redirect: Home },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "about" */ '../views/404'),

    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  /*
  if( to.path !== '/login') {
    next('/login');
  }
  */
  next()
})

export default router
