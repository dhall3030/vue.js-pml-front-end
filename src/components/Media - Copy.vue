<template>

  <section>

  	<div class="container">

      <main>
  		
  		<h1>Services</h1>

  		<p>This is the services page</p>


       <p>{{ status }}</p>

        <h2>Media</h2>

        <ul id="media">
            <li v-for="item in media">
             {{ item.name }}  {{ item.description }}
           </li>
        </ul>


        

      </main>

  	</div>

  </section>

</template>

<script>
    import axios from 'axios'

    export default {

      data(){

        return{

          status: '',
          media: []

        }


      },
      created(){


        this.loadMedia();

          
      },
      methods:{

          loadMedia(){


              this.status='Loading...';
              var app = this;
              //axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
              axios.get('/media?api_token=5a3067feef66b')
              .then(response =>{
              console.log(response)
              app.status = 'Load complete.';
              app.media = response.data
              })
              .catch(error =>{

              app.status = 'An error occured.'+ error;

              });



          }




      }
         

    


     }
</script>