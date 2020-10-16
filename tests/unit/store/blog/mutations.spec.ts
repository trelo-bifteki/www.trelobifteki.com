import mutations from '@/store/blog/mutations';

describe('blog.mutations', () => {
  it('updates posts', () => {
    const state = {
      posts: [],
    };
    const updatedPosts = [{
      id: 1
    }];
    mutations.updatePosts(state, updatedPosts);

    expect(
      state.posts
    ).toEqual(updatedPosts);
  });

  it('updates post', () => {
    const state = {
      post: undefined,
    };
    const updatedPost = {
      id: 1,
    };

    mutations.updatePost(state, updatedPost);

    expect(
      state.post
    ).toEqual(updatedPost);
  });

  it('updates post content', () => {
    const state = {
      postContent: undefined,
    };
    const updatedContent = 'Hello';

    mutations.updatePostContent(state, updatedContent);

    expect(
      state.postContent
    ).toEqual(updatedContent);
  });

  it('updated selectded post id', () => {
    const state = {
    };
    const updatedPostId = 1;

    mutations.updateSelectedPostId(state, updatedPostId);

    expect(state.selectedPostId).toBe(updatedPostId);
  })
});
