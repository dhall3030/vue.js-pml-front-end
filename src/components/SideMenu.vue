<template>


	 <div id="mySidenav" class="sidenav">
	     
	       <router-link class="nav-link" active-class="active" to="/home">Home</router-link>
		   <router-link class="nav-link" active-class="active" to="/media">Media</router-link>
		   <router-link class="nav-link" active-class="active" to="/add-media">Add Media</router-link>
		   <router-link class="nav-link" active-class="active" to="/media-types">Media Types</router-link>
		   <router-link class="nav-link" active-class="active" to="/add-media-types">Add Media Types</router-link>
		   <router-link class="nav-link" active-class="active" to="/signup">Signup</router-link>
           <router-link class="nav-link" active-class="active" to="/login">Login</router-link>
	</div>


</template>



<script>
	
 export default { 

 	


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



</style>