import axios from 'axios'

const state = { 

	
	mediaTypes: []

};


const mutations = {

	'SET_MEDIA_TYPES' (state, mediaTypes) {


	 	state.mediaTypes = mediaTypes;

	 
	 },



};


const actions ={

	initMediaTypes: ({commit},token) => {

 		
		axios.get('/media-types',{


        headers: {Authorization: 'Bearer '+token }


		})
              .then(response =>{
             
              	//console.log('data pull')
              	const mediaTypes = response.data;
              	commit('SET_MEDIA_TYPES', mediaTypes)
              


              })
              







 		

 	}

};


const getters = {

	mediaTypes (state) {

	 	return state.mediaTypes;
	 },
	 getMediaTypeById: (state) => (id) => {

	 	return state.mediaTypes.find(x => x.media_type_id == id);
	 }

};



export default {
	 state,
	 mutations,
	 actions,
	 getters


}