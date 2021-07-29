import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Card title goes here",
        blogCoverPhoto: "stock-1",
        blogDate: "20 May 2021",
      },
      {
        blogTitle: "Card title goes here",
        blogCoverPhoto: "stock-2",
        blogDate: "20 May 2021",
      },
      {
        blogTitle: "Card title goes here",
        blogCoverPhoto: "stock-3",
        blogDate: "20 May 2021",
      },
      {
        blogTitle: "Card title goes here",
        blogCoverPhoto: "stock-4",
        blogDate: "20 May 2021",
      },
       
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      
    }
  },
  actions: {
  },
  modules: {
  }
})
