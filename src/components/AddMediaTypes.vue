<template>

	<section>

      <div class="container">
          
          <main>

		         <div class="input-container"> 

			          <h2>Add Media Types</h2>


			          <div class="input">
			          	<label for="name">Name</label>
			          	<input type="text" placeholder="Enter name of media type" name="name" id="name" v-model="name">
			          </div>

			          <button @click="onSubmit">Submit</button>

			     </div>

		  </main>

	  </div>


	</section>


</template>


<script>
import axios from 'axios'
import {mapActions} from 'vuex';

export default {

	data() { 

		 return { 

		 	name: '',



		 }

	},
	methods: { 

		...mapActions({
               
                loadMediaTypes: 'initMediaTypes'
                
        }),
		onSubmit(){ 

			const payload ={

				name: this.name



			}
			console.log(payload)
        	axios.post('/media-types', payload , {headers:{Authorization: 'Bearer '+this.token}})
        	.then(res => {

        	 console.log(res);

        	 this.loadMediaTypes(this.token);
        	
        	})
        	.catch(error => console.log(error))

        	

        	this.$router.push('media-types')

		}





	},
	computed: {

		token(){

            return this.$store.getters.token;

        }


	}

}


</script>