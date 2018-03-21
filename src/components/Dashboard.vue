<template>

	<section>

      <div class="container">
          
          <main>

		        <div id="home">  

		        <h1 class="center">Dashboard</h1>

		          <h2 class="center">Welcome to the media library {{ userName }}</h2>

               <div class="row">
                     <div class="item"> 
                      <router-link class="box-link"  to="/media">View Media</router-link>
                    </div>
                     <div class="item">
                      <router-link class="box-link"  to="/add-media">Add Media</router-link>
                    </div>
               </div>

            </div> 

          </main>

	     </div>

  </section>

</template>

<script>
   
    
    import {mapActions} from 'vuex';
    
    export default { 

      methods: { 

         ...mapActions({
                loadMedia: 'initMedia',
                loadMediaTypes: 'initMediaTypes'
               
                
          }),



      },
      computed:{

        userName(){

           return this.$store.getters.userData.name;

        },
        token(){

            return this.$store.getters.token;

        },
        userId(){

            return this.$store.getters.userId;

        }



      },
      created(){
        
         
        const mediaData = {token: this.token , userId: this.userId} 

         this.loadMediaTypes(this.token);
         this.loadMedia(mediaData);

        


      }
      
    

     
    }

</script>





