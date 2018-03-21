import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//import {routes} from './routes'

import router from './router'

import store from './store/store';

import axios from 'axios'

axios.defaults.baseURL = 'http://pml/api'

// Vue.use(VueRouter);

// const router = new VueRouter({

// 	routes,
// 	mode: 'history'

// });





new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
