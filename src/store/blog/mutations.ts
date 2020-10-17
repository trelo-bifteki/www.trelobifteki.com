import {
 BlogState
} from './types';

export default {
  updatePosts: (state: BlogState, posts: Array<any>) => {
    state.posts = [...posts];
  },
  updatePost: (state: BlogState, post: any) => {
    state.post = post;
  },
  updatePostContent: (state: BlogState, content: string) => {
    state.postContent = content;
  },
  updateSelectedPostId: (state: BlogState, content: string) => {
    state.selectedPostId = content;
  },
};
