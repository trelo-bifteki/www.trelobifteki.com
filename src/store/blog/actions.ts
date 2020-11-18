import axios from 'axios';
import {
  Commit,
} from 'vuex';
import {
  BlogState,
} from './types';

export default {
  refreshPosts({
    commit,
  }: {
    commit: Commit,
  }) {
    return axios
      .get('/static/blog-posts.json')
      .then(response => {
        commit('updatePosts', response.data);
      });
  },

  refreshPostContent({
    state,
    commit,
  }: {
    state: BlogState,
    commit: Commit,
  }) {
    return axios
      .get(`/static/blog/${state.selectedPostId}.html`)
      .then(response => {
        commit('updatePostContent', response.data);
      });
  },
};
