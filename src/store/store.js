import Vue from 'vue';
import Vuex from 'vuex';



import auth  from './modules/auth';
import media  from './modules/media';
import media_type from './modules/media_type';

import router from '../router'

Vue.use(Vuex); 



export default new Vuex.Store({
	
	
	actions: {

		logoutTwo: ({commit}) =>{

			commit('CLEAR_AUTH')

			localStorage.removeItem('token')
	  		localStorage.removeItem('userId')


			router.replace('/login')

		
		}


	},
	modules:{
		auth,
		media,
		media_type


	}



});