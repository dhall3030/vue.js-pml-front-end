<template>


	 <div id="mySidenav" class="sidenav">
	     
	       
       <router-link class="nav-link" v-if="!auth" active-class="active" to="/home">Home</router-link>
       <router-link class="nav-link" v-if="auth" active-class="active" to="/dashboard">Dashboard</router-link>
		   <router-link class="nav-link" v-if="auth" active-class="active" to="/media">Media</router-link>
		   <router-link class="nav-link" v-if="auth" active-class="active" to="/add-media">Add Media</router-link>
		   <router-link class="nav-link" v-if="auth" active-class="active" to="/media-types">Media Types</router-link>
		   <router-link class="nav-link" v-if="auth" active-class="active" to="/add-media-types">Add Media Types</router-link>
		   <router-link class="nav-link" v-if="!auth" active-class="active" to="/signup">Signup</router-link>
       <router-link class="nav-link" v-if="!auth" active-class="active" to="/login">Login</router-link>
       
       <br>
       
       <div v-if="auth"><button @click="onLogout" class="logout" >Logout</button></div>
	    
  </div>


</template>



<script>
	
 export default { 

    methods:{

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
	
$colorOne: #ffa500


.sidenav 
  height: 100%
  width: 250px
  position: fixed
  z-index: 1
  top: 0
  right: 0
  background-color: #111
  overflow-x: hidden
  transition: 0.5s
  padding-top: 150px


.sidenav a 
  padding: 10px 10px 10px 10px
  text-decoration: none
  font-size: 1.5em
  color: #FFF
  display: block
  transition: 0.3s
  text-align: center


.sidenav a:hover 
  color: $colorOne


.sidenav .closebtn 
  position: absolute
  top: 0
  right: 25px
  font-size: 36px
  margin-left: 50px

.sidenav button 
  display: block
  width: 90%
  margin: 0 auto

</style>