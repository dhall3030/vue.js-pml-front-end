 
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
                 <router-view :mediaTypes="mediaTypes" :media="media"  ></router-view>
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

        
        mediaTypes(){

            return this.$store.getters.mediaTypes;

        },

        media(){

            return this.$store.getters.media;

        },
        token(){

            return this.$store.getters.token;

        }
       

      },
      components: {
        appHeader: Header,
        appSideMenu: SideMenu



      },
      created(){
         
         this.$store.dispatch('autoLogin') 
        


      }

     
    }

</script>


<style lang="sass">

@import "~susy/sass/susy"

@import 'sass/reset'

//$susy: ('columns': susy-repeat(12),'gutters': 0.5em,'spread': 'wide','container-spread': 'wide',);

@import 'sass/style'


</style>



