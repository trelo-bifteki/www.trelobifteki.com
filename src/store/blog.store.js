import axios from 'axios';

export default {
  state: {
    posts: [],
    post: {},
    postContent: '',
  },
  mutations: {
    updatePosts: (state, posts) => {
      state.posts = [...posts];
    },
    updatePost: (state, post) => {
      state.post = post;
    },
    updatePostContent: (state, content) => {
      state.postContent = content;
    },
  },
  actions: {
    refreshPosts({ commit }) {
      return new Promise((resolve) => {
        axios.get('/static/blog-posts.json').then((response) => {
          commit('updatePosts', response.data);
          resolve(response.data);
        });
      });
    },
    refreshPostContent(context) {
      return new Promise((resolve) => {
        axios.get(`/static/blog/${context.state.post.id}.html`).then((response) => {
          context.commit('updatePostContent', response.data);
          resolve(response.data);
        });
      });
    },
  },
  getters: {
    getById: state => id => state.posts.find(post => post.id === id),
  },
};
