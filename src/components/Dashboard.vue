<template>

	<section>

      <div class="container">
          
          <main>

		        <div id="home">  

		        <h1 class="center">Dashboard</h1>

		          <h2 class="center">Welcome {{ userName }}</h2>

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
   
    
   

    
    export default { 

     

      computed:{

        userName(){

           return this.$store.getters.userData.name;

        }

      




      }
      
    

     
    }

</script>





