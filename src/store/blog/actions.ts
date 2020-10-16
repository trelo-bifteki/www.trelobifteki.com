import axios from 'axios';

export default {
  refreshPosts({
    commit
  }) {
    return axios
      .get('/static/blog-posts.json')
      .then(response => {
        commit('updatePosts', response.data);
      });
  },

  refreshPostContent(context) {
    return axios
      .get(`/static/blog/${context.state.selectedPostId}.html`)
      .then(response => {
        context.commit('updatePostContent', response.data);
      });
  },
};
