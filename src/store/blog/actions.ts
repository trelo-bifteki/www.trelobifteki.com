import axios from 'axios';
import {
  Commit,
} from 'vuex';
import {
  BlogActionTree,
  BlogPost,
  BlogState,
} from './types';

const actions: BlogActionTree =  {
  async refreshPosts({
    commit,
  }: {
    commit: Commit;
  }): Promise<ReadonlyArray<BlogPost>> {
    const response = await axios.get<ReadonlyArray<BlogPost>>('/static/blog-posts.json');
    const data = response.data;
    commit('updatePosts', data);
    return data;
  },

  async refreshPostContent({
    state,
    commit,
  }: {
    state: BlogState;
    commit: Commit;
  }): Promise<string> {
    const response = await axios.get<string>(`/static/blog/${state.selectedPostId}.html`);
    const data = response.data;
    commit('updatePostContent', response.data);
    return data;
  },
};

export default actions;
