import axios from 'axios'

import router from '../../router'

const state = { 

	token: null, 
	userId: null,
	userData: null
	

};


const mutations = {

	'AUTH_USER' (state, userData) {


	 	state.token = userData.token;
	 	state.userId = userData.userId;
	 	state.userData = userData.data;

	 
	 },
	 'CLEAR_AUTH' (state) {

	 	state.token = null 
  		state.userId = null

	 }



};


const actions ={

	signup: ({commit , dispatch}, userData) => { 

		
			axios.post('/userRegister',{

				name: userData.name,
				email: userData.email,
				password: userData.password,
				c_password: userData.c_password



			})
            .then(response =>{
             
              	console.log(response.data)
                
                commit('AUTH_USER',{

                	token: response.data.success.token,
              		userId: response.data.user.id,
              		data: response.data.user

                })

             localStorage.setItem('token',response.data.success.token)
			 localStorage.setItem('userId',response.data.user.id)
			 localStorage.setItem('userData',JSON.stringify(response.data.user))

            })
            .catch(error => console.log(error))




	},
	login: ({commit , dispatch}, userData) => {

			axios.post('/userLogin',{

					
					email: userData.email,
					password: userData.password
					



				})
	            .then(response =>{
	             
	             	console.log(response.data)
	              	
	                commit('AUTH_USER',{

	                	token: response.data.success.token,
	              		userId: response.data.user.id,
	              		data: response.data.user

	                })

	                localStorage.setItem('token',response.data.success.token)
			 		localStorage.setItem('userId',response.data.user.id)
			 		localStorage.setItem('userData',JSON.stringify(response.data.user))

			 		router.replace('/dashboard')


	            })
	            .catch(error => console.log(error))

		
	},
	logout: ({commit}) =>{

		commit('CLEAR_AUTH')

		localStorage.removeItem('token')
  		localStorage.removeItem('userId')


		router.replace('/login')

		
	},
	autoLogin: ({commit})=>{

		const token = localStorage.getItem('token')
		const userId = parseInt(localStorage.getItem('userId'))
		const userData = JSON.parse(localStorage.getItem('userData'))

		commit('AUTH_USER',{

	          token: token,
	          userId: userId,
	          data: userData


	    })




	}




}

const getters = {


	userId (state) {

  		return state.userId

  	},
  	userData (state) {

  		return state.userData

  	},
  	token (state) {

  		return state.token

  	},
  	isAuthenticated(state){ 

  		return state.token !== null




  	}



}




export default {
	 state,
	 mutations,
	 actions,
	 getters


}