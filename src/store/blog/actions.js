import request from 'superagent';

export default {
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
};
