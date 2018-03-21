import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store/store'

import Home from './components/Home.vue';
import Dashboard from './components/Dashboard.vue';
import Media from './components/Media.vue';
import AddMedia from './components/AddMedia.vue';
import AddMediaTypes from './components/AddMediaTypes.vue';
import MediaTypes from './components/MediaTypes.vue';
import MediaProfile from './components/MediaProfile.vue';
import Login from './components/auth/Login.vue';
import SignUp from './components/auth/SignUp.vue';

Vue.use(VueRouter)

const routes = [
  {path: '/signup', component: SignUp, name: 'signup'},
  {path: '/login', component: Login, name: 'login'},
  {path: '/home', component: Home, name: 'home'},
  {path: '/media', component: Media, name: 'media'},
  {path: '/media-types', component: MediaTypes, name: 'media-types'},
  {path: '/add-media', component: AddMedia, name: 'add-media'},
  {path: '/add-media-types', component: AddMediaTypes, name: 'add-media-types'},
  {path: '/media-profile/:id', component: MediaProfile, name: 'media-profile'},
  {path: '/', redirect: '/home' },
  {path: '*', redirect: '/' },
  
  { 
  	path: '/dashboard', 
  	component: Dashboard,
  	beforeEnter (to, from, next) { 
  		
      //console.log(store.state.token)
      if(store.getters.isAuthenticated == true){

  			next()

  		}else{

  			next('/login')

  		}


  	}



  }
]

export default new VueRouter({mode: 'history', routes})