<template>

  <section>

      <div class="container">
          
          <main>

              

            <h1>Home</h1>

              <p>This is the media page</p>

              

               <div>

               <h2>Media</h2>

               <label for="search">Filter:</label> <input type="text" placeholder="Search" v-model="search"/>   
                <table class="table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Profile</th>
                      <th>Delete</th>
                    </tr>
                    

                  </thead>
                  <tbody>
                    <tr v-for="item in filterMedia"> 

                      <td>{{ item.media_id }}</td> <td>{{ item.name }}</td><td>{{ mediaType(item.media_type_id).name }}</td><td> <router-link class="nav-link" active-class="active" :to="'/media-profile/'+item.media_id">Media Profile</router-link></td><td><a href="#" @click="deleteMedia(item.media_id)">Delete</a></td>

                    </tr>
                  </tbody>
                </table>

               

               </div>

          </main>

       </div>

  </section>

</template>

<script>
    
    import axios from 'axios'

    import {mapActions} from 'vuex';
    
    
    export default { 
      data(){

        return{

          search: ''
        }

      },
      props: ['media'],
      methods: { 


         ...mapActions({
                loadMedia: 'initMedia'
                
               
                
          }),
          deleteMedia(mediaId){

          
               

                if( confirm("Do you want to delete this item?") ){

                  

                  axios.delete('/media/'+mediaId,{headers:{Authorization: 'Bearer '+this.token}})
                  .then(response =>{
                    console.log(response)

                   
                
                    let mediaData = {token: this.token , userId: this.userId} 
                    this.loadMedia(mediaData);
                    
             
                  })
                  .catch(error =>{

                    console.log(error)

                  })





                }else{


                  return false


                }
           


             



          },
          mediaType(id){


          return this.$store.getters.getMediaTypeById(id)

          
          }


      },
      computed: { 

        filterMedia(){

          let appdata = this;

          return this.media.filter(m =>{

            return m.name.toLowerCase().indexOf(appdata.search.toLowerCase())>=0;


          });



        },
        token(){

            return this.$store.getters.token;

        },
        userId(){

            return this.$store.getters.userId;

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
    content: "Id"
  
  table tbody tr td:nth-child(2):before 
    content: "Name"
  
  table tbody tr td:nth-child(3):before 
    content: "Type"
  
  table tbody tr td:nth-child(4):before 
    content: "Profile"
  
  table tbody tr td:nth-child(5):before 
    content: "Delete"
  
  table tbody tr td:nth-child(6):before 
    content: "Total"
  




</style>