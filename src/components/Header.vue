<template>


	<header id="header">

		<div class ="container">

			<div class="row">


				 

				 <div v-if="!auth" class="brand" @click="goHome">Media Library</div>

				 <div v-if="auth" class="brand" @click="dashboard">Media Library</div>

				 <nav class="nav">
					 <ul>
						 <li v-if="!auth"><router-link class="nav-link" active-class="active" to="/home">Home</router-link></li>
						 <li v-if="auth"><router-link class="nav-link" active-class="active" to="/dashboard">Dashboard</router-link></li>
						 <li v-if="auth"><router-link class="nav-link" active-class="active" to="/media">Media</router-link></li>
						 <li v-if="auth"><router-link class="nav-link" active-class="active" to="/add-media">Add Media</router-link></li>
						 <li v-if="auth"><router-link class="nav-link" active-class="active" to="/media-types">Media Types</router-link></li>
						 <li v-if="auth"><router-link class="nav-link" active-class="active" to="/add-media-types">Add Media Types</router-link></li>
						 <li v-if="!auth"><router-link class="nav-link" active-class="active" to="/signup">Sign Up</router-link></li>
		                 <li v-if="!auth"><router-link class="nav-link" active-class="active" to="/login">Login</router-link></li>
						 <li v-if="auth">
		          			<button @click="onLogout" class="logout" >Logout</button>
		        		 </li>
					 </ul>
				 </nav>

			</div>

		</div>


	</header>


</template>

<script>
export default { 

	
      
	methods: {

		goHome(){

			this.$router.push('/')



		},
		dashboard(){

			this.$router.push('/dashboard')



		},
		 onLogout() {

      		this.$store.dispatch('logout')

    	}


	},
	computed: {

		auth(){

	      return this.$store.getters.isAuthenticated


	    }



	}   

     
    
}
</script>

<style lang="sass" scoped> 

.row 
  display: block





</style>