import Vue from 'vue'
import App from './App.vue'
//on rajoute le router
import router from './router';
//on ajoute le store
import { store } from "./store";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
