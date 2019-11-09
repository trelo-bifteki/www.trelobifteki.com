export default {
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
};
