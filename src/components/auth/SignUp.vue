<template>

	<section>

      <div class="container">
          
          <main>


					<div class="input-container">


				    	<h2>Register</h2>		

				    	<div class="input"><label for="name">Name:</label><input type="text" placeholder="Enter your name" id="name" name="name" v-model="name"></div>

						

						<div class="input"><label for="email">Email:</label><input type="email" placeholder="Enter your email" id="email" name="email" v-model="email"></div>

						<div class="input"><label for="password">Password:</label><input type="password"  id="password" name="password" v-model="password"></div>

						<div class="input"><label for="confirm">Confirm Password:</label><input type="password"  id="confirm" name="confirm" v-model="c_password"></div>

					   
				          
				      	


				     <button @click="onSubmit">Submit</button>

		  		</div>

		  </main>

	  </div>


	</section>


</template>



<script>


export default {
	
	data () {
      return {
        name: '',
        email: '',
        password: '',
        c_password: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          name: this.name,
          email: this.email,
          password: this.password,
          c_password: this.password,
        }
        console.log(formData)
       
        this.$store.dispatch('signup',{name: formData.name , email: formData.email, password: formData.password, c_password: formData.c_password})
      }
    }	



}


</script>