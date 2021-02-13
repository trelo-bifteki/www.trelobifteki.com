import {
  BlogMutationTree,
  BlogPost,
  BlogState,
} from './types';

const mutations: BlogMutationTree = {
  updatePosts: (state: BlogState, posts: ReadonlyArray<BlogPost>) => {
    state.posts = [ ...posts ];
  },
  updatePost: (state: BlogState, post: BlogPost) => {
    state.post = post;
  },
  updatePostContent: (state: BlogState, content: string) => {
    state.postContent = content;
  },
  updateSelectedPostId: (state: BlogState, postId: string) => {
    state.selectedPostId = postId;
  },
};

export default mutations;
