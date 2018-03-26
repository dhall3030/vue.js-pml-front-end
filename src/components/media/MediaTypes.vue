<template>

	<section>

      <div class="container">
          
          <main>

		          <h1>Media Types</h1>

		          <table class="table">
                    <thead>
                     <tr>
                      <th>Name</th>
                      <th>Delete</th>

                     </tr>
                      

                    </thead>

                    <tbody>
	                  <tr v-for="item in mediaTypes">
	                   <td>{{ item.name }}</td><td><a href="#" @click="deleteMT(item.media_type_id)">Delete</a></td> 
	                  </tr>
                    </tbody>
              </table>

		  
               




		  </main>

	  </div>


	</section>


</template>


<script>
	import axios from 'axios'
    import {mapActions} from 'vuex';
    export default { 

      //props: ['mediaTypes' ,'media'],
      methods: { 

        ...mapActions({
               
                loadMediaTypes: 'initMediaTypes'
                
         }),
         deleteMT(mediaTypeId){

         	  //alert(mediaTypeId)

         	    if( confirm("Do you want to delete this item?") ){
              
                  axios.delete('/media-types/'+mediaTypeId,{headers:{Authorization: 'Bearer '+this.token}})
                  .then(response =>{
                  	console.log(response)
                  	
                    if(response.data == "23000"){

                      alert('Deletion Failed! Media Type is currently assgined to media items. ')

                    }else{

                      this.loadMediaTypes(this.token);

                    }

                   
                 
                  })
                  .catch(error =>{

                  	console.log(error)

                  })

              }else{


                return false

              }

          }


      },
      computed: {


        mediaTypes(){

            return this.$store.getters.mediaTypes;

        },
        token(){

            return this.$store.getters.token;

        }

      }
      
      	
     



     

     

     
    }

</script>

<style lang="sass" scoped>
  

table 
  border-spacing: 1
  border-collapse: collapse
  background: white
  border-radius: 10px
  overflow: hidden
  width: 100%
  margin: 0 auto
  position: relative

table * 
  position: relative

table td, table th 
  padding-left: 15px
  vertical-align: middle

table tr td:first-child , table tr th:first-child 
  padding-left: 40px

table tr td:last-child , table tr th:last-child 
  padding-right: 40px

table thead tr 
  height: 50px
  background: #36304a

table tbody tr 
  height: 50px

table tbody tr:last-child 
  border: 0

table td, table th 
  text-align: left


tbody tr:nth-child(even) 
  background-color: #f5f5f5


tbody tr 
  font-family: inherit
  font-size: 15px
  color: #808080
  line-height: 1.2
  font-weight: unset


tbody tr:hover 
  color: #555555
  background-color: #ffffe6
  cursor: pointer



thead th
  font-family: inherit
  color: #fff
  line-height: 1.2
  font-weight: unset

table a, table a:hover, table a:visited, table a:active 
  color: #ffa500
  text-decoration: none
  






@media screen and (max-width: 992px)
  table 
    display: block
  
  table > *, table tr, table td, table th 
    display: block
  
  table thead 
    display: none
  
  table tbody tr 
    height: auto
    padding: 37px 0
  
  table tbody tr td 
    padding-left: 40% !important
    margin-bottom: 24px
  
  table tbody tr td:last-child 
    margin-bottom: 0
  
  table tbody tr td:before 
    font-family: inherit
    font-size: 14px
    color: #999999
    line-height: 1.2
    font-weight: unset
    position: absolute
    width: 40%
    left: 30px
    top: 0
  
  table tbody tr td:nth-child(1):before 
    content: "Name"
  
  table tbody tr td:nth-child(2):before 
    content: "Delete"
  
 




</style>