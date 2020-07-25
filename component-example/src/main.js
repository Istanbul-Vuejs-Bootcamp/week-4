import Vue from 'vue'
import App from './App.vue'
import myComponent1 from "./components/myComponent1";

Vue.config.productionTip = false
Vue.component('globalComponent', myComponent1);

new Vue({
  render: h => h(App),
}).$mount('#app')
