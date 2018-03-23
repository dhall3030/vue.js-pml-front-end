<template>

	<section>

      <div class="container">
          
          <main>

		         <div class="input-container"> 


		         	  <div  v-html="getError"></div>		

			          <h2>Add Media Types</h2>


			          <div class="input" :class="{invalid: $v.name.$error}">
			          	<label for="name">Name</label>
			          	<input type="text" placeholder="Enter name of media type"  @blur="$v.name.$touch()" name="name" id="name" v-model="name">
			          </div>

			          <button @click="onSubmit" :disabled="$v.$invalid">Submit</button>

			     </div>

		  </main>

	  </div>


	</section>


</template>


<script>

import axios from 'axios'
import {mapActions} from 'vuex';

import { required } from 'vuelidate/lib/validators'

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
	validations:{

      name:{
        required
      }



    },
	computed: {

		token(){

            return this.$store.getters.token;

        },
        getError(){

        let errorMsg = ""

        
        if(this.$v.name.$error && !this.$v.name.required){

          errorMsg += "<p>The name field must not be empty.</p>";

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

.input.invalid input 
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