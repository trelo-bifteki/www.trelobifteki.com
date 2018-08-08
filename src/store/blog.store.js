import axios from 'axios';

export default {
  state: {
    posts: [],
  },
  mutations: {
    updatePosts: (state, posts) => {
      state.posts = [...posts];
    },
  },
  actions: {
    refreshPosts({ commit }) {
      return new Promise((resolve) => {
        axios.get('static/blog-posts.json').then((response) => {
          commit('updatePosts', response.data);
          resolve(response.data);
        });
      });
    },
  },
  getters: {
    getById: state => id => state.posts.find(post => post.id === id),
  },
};
