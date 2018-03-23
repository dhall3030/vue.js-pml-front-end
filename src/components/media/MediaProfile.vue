<template>

	<section>

    <div class="container">

      <main>
		
    		<h1>Media Profile</h1>

    	<!-- 	<p>{{ $route.params.id }}</p>
 -->
        

       <p><strong>Name: </strong>{{mediaItem.name}}</p>

       <p><strong>Media Type: </strong>{{mediaType.name}}</p>

       <p><strong>Description: </strong></p>

       <p>{{mediaItem.description}}</p>

       <p><strong>Copies: </strong>{{mediaItem.number_of_copies}}</p>

      </main>

	 </div>

  </section>

</template>

<script>
    
    export default { 
      
      //props: ['media'],
      
      computed: {
        

        mediaItem(){

          //return this.media.find(x => x.media_id === this.$route.params.id);
          //console.log(this.$store.getters.getMediaById(this.$route.params.id));

          return this.$store.getters.getMediaById(this.$route.params.id);

          //return this.$store.getters.getTodoById(2)

           //return this.media.find(x => x.media_id == this.$route.params.id);


        },
        mediaType(){


          return this.$store.getters.getMediaTypeById(this.mediaItem.media_type_id); 

        }


      }

      // },
      // created(){
        
      //    this.loadMedia();
        


      // }

     

     
    }

</script>


