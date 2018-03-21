import Vue from 'vue'
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

export const routes = [
{path: '/signup', component: SignUp, name: 'signup'},
{path: '/login', component: Login, name: 'login'},
{path: '/home', component: Home, name: 'home'},
{path: '/dashboard', component: Dashboard, name: 'dashboard',

    beforeEnter (to, from, next) { 
      
      

      if(store.getters.isAuthenticated == true){

        next()

      }else{

        next('/login')

      }


    }

},
{path: '/media', component: Media, name: 'media',

	beforeEnter (to, from, next) { 
  		
  		

  		if(store.getters.isAuthenticated == true){

  			next()

  		}else{

  			next('/login')

  		}


  	}



},
{path: '/media-types', component: MediaTypes, name: 'media-types',

	beforeEnter (to, from, next) { 
  		if(store.getters.isAuthenticated == true){

  			next()

  		}else{

  			next('/login')

  		}


  	}
	


 },
{path: '/add-media', component: AddMedia, name: 'add-media',

	beforeEnter (to, from, next) { 
  		if(store.getters.isAuthenticated == true){

  			next()

  		}else{

  			next('/login')

  		}


  	}

},
{path: '/add-media-types', component: AddMediaTypes, name: 'add-media-types', 

	beforeEnter (to, from, next) { 
  		if(store.getters.isAuthenticated == true){

  			next()

  		}else{

  			next('/login')

  		}


  	}


},
{path: '/media-profile/:id', component: MediaProfile, name: 'media-profile', 

	beforeEnter (to, from, next) { 
  		if(store.getters.isAuthenticated == true){

  			next()

  		}else{

  			next('/login')

  		}


  	}


},
{path: '/', redirect: '/home' },
{path: '*', redirect: '/' }


];