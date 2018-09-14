import request from 'superagent';

export default {
  state: {
    selectedPostId: '',
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
    updateSelectedPostId: (state, content) => {
      state.selectedPostId = content;
    },
  },
  actions: {
    refreshPosts({ commit }) {
      return request
        .get('/static/blog-posts.json')
        .end((error, response) => {
          commit('updatePosts', response.body);
        });
    },
    refreshPostContent(context) {
      return request
        .get(`/static/blog/${context.state.selectedPostId}.html`)
        .end((error, response) => {
          context.commit('updatePostContent', response.text);
        });
    },
  },
  getters: {
    getById: state => id => state.posts.find(post => post.id === id),
  },
};
