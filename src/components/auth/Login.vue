<template>

	<section>

      <div class="container">
          
          <main>


					<div class="input-container">


				    	<h2>Login</h2>		


						<div class="input"><label for="email">Email:</label><input type="email" placeholder="Enter your email" id="email" name="email" v-model="email"></div>

						<div class="input"><label for="password">Password:</label><input type="password"  id="password" name="password" v-model="password"></div>

					   
				          
				      	


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
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData)
       
        this.$store.dispatch('login',{email: formData.email, password: formData.password})
      }
    }	
	

}


</script>