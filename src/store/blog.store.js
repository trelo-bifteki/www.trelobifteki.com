import request from 'superagent';

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
      return request
        .get('/static/blog-posts.json')
        .then(({ body }) => {
          commit('updatePosts', body);
          return body;
        });
    },
    refreshPostContent(context) {
      return request
        .get(`/static/blog/${context.state.post.id}.html`)
        .then(({ text }) => {
          context.commit('updatePostContent', text);
          return text;
        });
    },
  },
  getters: {
    getById: state => id => state.posts.find(post => post.id === id),
  },
};
