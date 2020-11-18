import mutations from '@/store/blog/mutations';
import {
  BlogState,
} from '@/store/blog/types';
import {
  createDefaultState,
} from '@/store/blog/state';

describe('blog.mutations', () => {
  it('updates posts', () => {
    const state: BlogState = createDefaultState();
    const updatedPosts = [{
      id: 1,
    }];
    mutations.updatePosts(state, updatedPosts);

    expect(
      state.posts,
    ).toEqual(updatedPosts);
  });

  it('updates post', () => {
    const state = createDefaultState();
    const updatedPost = {
      id: 1,
    };

    mutations.updatePost(state, updatedPost);

    expect(
      state.post,
    ).toEqual(updatedPost);
  });

  it('updates post content', () => {
    const state = createDefaultState();
    const updatedContent = 'Hello';

    mutations.updatePostContent(state, updatedContent);

    expect(
      state.postContent,
    ).toEqual(updatedContent);
  });

  it('updated selectded post id', () => {
    const state = createDefaultState();
    const updatedPostId = '1';

    mutations.updateSelectedPostId(state, updatedPostId);

    expect(state.selectedPostId).toBe(updatedPostId);
  })
});
