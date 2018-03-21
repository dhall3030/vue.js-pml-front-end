<template>

	<section>

      <div class="container">
          
          <main>



		         


				<div class="input-container">


				    <h2>Add Media</h2>		


						<div class="input"><label for="name">Name:</label><input type="text" placeholder="Enter name of media" id="name" name="name" v-model="name"></div>

					    <div class="input">
					        <label for="media_type">Media Type:</label>	
					        <select id="media_type" v-model="media_type">

					          	<option v-for="mediaType in mediaTypes" :value="mediaType.media_type_id">{{mediaType.name}}</option>
					          	
					         </select> 
					      	  
					    </div>

					      	
					    <div class="input">
					    	<label for="description">Description:</label>
					    	<textarea id="description" placeholder="Enter a description" v-model="description"> </textarea> 
					    </div>

					      

					    <div class="input">
					    	<label for="number_of_copies">Number Of Copies:</label>
					    	<input id="number_of_copies" type="number" min="1" name="number_of_copies" v-model="number_of_copies">
					    </div>

					  

				          
				      	


				     <button @click="onSubmit">Submit</button>

		  		</div>

		  </main>

	  </div>


	</section>


</template>



<script>
import axios from 'axios'
import {mapActions} from 'vuex'



export default {
	props: ['mediaTypes'],
	data() { 

		 return { 

		  name: '',
          media_type: 1,
          description: '',
          number_of_copies : 1



		 }

	},
	methods: { 


		...mapActions({
                loadMedia: 'initMedia',
               
               
                
        }),

		onSubmit(){ 

			const payload ={

				name: this.name,
				user_id: this.userId,
          		media_type_id: this.media_type,
          		description: this.description,
          		number_of_copies: this.number_of_copies



			}
			console.log(payload)
        	axios.post('/media', payload,{headers:{Authorization: 'Bearer '+this.token}})
        	.then(res => {

        		console.log(res)

        		const mediaData = {token: this.token , userId: this.userId} 

        		this.loadMedia(mediaData)

        	})
        	.catch(error => console.log(error))

        	
				this.$router.push('/media')

		}





	},
	computed: {

		token(){

            return this.$store.getters.token;

        },
        userId(){

            return this.$store.getters.userId;

        }


	}

}


</script>