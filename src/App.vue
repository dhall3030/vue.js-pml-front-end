 
<template>
    <div>
  
                 
                <div :class="{open: isOpen }" id="nav-icon" @click="isOpen = !isOpen">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>


                 <app-header></app-header>
                
                 
                 <transition name="slide" mode="out-in">
                <!--  <router-view :mediaTypes="mediaTypes" :media="media"  ></router-view> -->
                 <router-view></router-view>
                 </transition>
                 
                  
                
                 <app-side-menu  :style="{width: isOpen?'250px':'0'}"></app-side-menu>
               

               

    </div>
</template>


<script>
    import Header from './components/Header.vue';
    import SideMenu from './components/SideMenu.vue';
    
    import {mapActions} from 'vuex';

    export default { 
      data(){

        return {

        isOpen: false


        }

      },
      methods: { 

        ...mapActions({
                loadMedia: 'initMedia',
                loadMediaTypes: 'initMediaTypes'
                
          }),


      },
      computed: { 

        
        token(){

            return this.$store.getters.token;

        },
        userId(){

            return this.$store.getters.userId;

        }

       

      },
      components: {
        appHeader: Header,
        appSideMenu: SideMenu



      },
      created(){
         
         this.$store.dispatch('autoLogin') 


           if(this.$store.getters.isAuthenticated == true){

               const mediaData = {token: this.token , userId: this.userId} 

               this.loadMediaTypes(this.token);
               this.loadMedia(mediaData);

               this.$router.replace('/dashboard')


           }
        


      }

     
    }

</script>


<style lang="sass">
@import "~susy/sass/susy"
@import 'sass/reset'
@import 'sass/style'

//$susy: ('columns': susy-repeat(12),'gutters': 0.5em,'spread': 'wide','container-spread': 'wide',);




</style>



