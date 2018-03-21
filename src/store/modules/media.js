import axios from 'axios'


const state = { 

	
	media: [],
	// todos: [
 //      { id: 1, text: '...', done: true },
 //      { id: 2, text: '...', done: false }
 //    ]

};


const mutations = {

	'SET_MEDIA' (state, media) {


	 	state.media = media;

	 
	 },



};


const actions = {

	initMedia: ({commit},mediaData) => {

 		
		axios.get('/getMedia/'+mediaData.userId+'',{

			 headers: {Authorization: 'Bearer '+mediaData.token }

		})
              .then(response =>{
             
              	const media = response.data;
              	
              	//console.log(response);

              	commit('SET_MEDIA', media)
              


              })

              







 		

 	}

};

const getters = {

	media (state) {

	 	//console.log(state.media)
	 	return state.media;
	},
	getMediaById: (state) => (id) => {

	 	
		return state.media.find(x => x.media_id == id);
		 	
		
	 
	}
	 
	 // getTodoById: (state) => (id) => {
  //   	return state.todos.find(todo => todo.id === id)
  // 	 }

};



export default {
	 state,
	 mutations,
	 actions,
	 getters


}