import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import { routes } from "./router";
import VueRouter from "vue-router";
const router = new VueRouter({
  routes,
  mode: 'history',
})
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

