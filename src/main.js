import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store/store';

Vue.use(Vuelidate)

//axios.defaults.baseURL = 'http://pml/api'
axios.defaults.baseURL = 'http://pml.dorianhall.ca/api'



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
