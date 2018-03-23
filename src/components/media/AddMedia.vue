<template>

	<section>

      <div class="container">
          
          <main>



		         


				<div class="input-container">

					<div  v-html="getError"></div> 

				    <h2>Add Media</h2>		


						<div class="input" :class="{invalid: $v.name.$error}">
							<label for="name">Name:</label>
							<input type="text" placeholder="Enter name of media" @blur="$v.name.$touch()" id="name" name="name" v-model="name">
						</div>

					    <div class="input" :class="{invalid: $v.name.$error}">
					        <label for="media_type">Media Type:</label>	
					        <select id="media_type" v-model="media_type">

					          	<option v-for="mediaType in mediaTypes" :value="mediaType.media_type_id">{{mediaType.name}}</option>
					          	
					         </select> 
					      	  
					    </div>

					      	
					    <div class="input" :class="{invalid: $v.description.$error}">
					    	<label for="description">Description:</label>
					    	<textarea id="description" placeholder="Enter a description" @blur="$v.description.$touch()" v-model="description"> </textarea> 
					    </div>

					      

					    <div class="input">
					    	<label for="number_of_copies">Number Of Copies:</label>
					    	<input id="number_of_copies" type="number" min="1" name="number_of_copies" v-model="number_of_copies">
					    </div>

					  

				          
				      	


				     <button @click="onSubmit" :disabled="$v.$invalid">Submit</button>

		  		</div>

		  </main>

	  </div>


	</section>


</template>



<script>
import axios from 'axios'
import {mapActions} from 'vuex'

import { required } from 'vuelidate/lib/validators'

export default {
	//props: ['mediaTypes'],
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
	validations:{

      name:{
        required
      },
      description:{
        required
      }



    },
	computed: {

		token(){

            return this.$store.getters.token;

        },
        userId(){

            return this.$store.getters.userId;

        },
        mediaTypes(){

            return this.$store.getters.mediaTypes;

        },
        getError(){

        let errorMsg = ""

        
        if(this.$v.name.$error && !this.$v.name.required){

          errorMsg += "<p>The name field must not be empty.</p>";

        }
        if(this.$v.description.$error && !this.$v.description.required){

          errorMsg += "<p>The description field must not be empty.</p>";

        }
        if(errorMsg !=""){
        return '<div class="alert alert-danger">'+errorMsg+'</div>';
        }
      
      }


	}

}


</script>


<style lang="sass" scoped>

=border-radius($radius)
  -webkit-border-radius: $radius
  -moz-border-radius:    $radius
  -ms-border-radius:     $radius
  border-radius:         $radius


.input.invalid label 
  color: red

.input.invalid input , .input.invalid textarea 
  border: 1px solid #ebccd1
  background-color: #f2dede

button[disabled],
button[disabled]:hover,
button[disabled]:active 
  border: 1px solid #ccc
  background-color: transparent
  color: #ccc;
  cursor: not-allowed
  


</style>