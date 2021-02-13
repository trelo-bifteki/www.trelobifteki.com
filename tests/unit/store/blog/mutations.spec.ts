import mutations from '@/store/blog/mutations';
import {
  BlogPost,
  BlogState,
} from '@/store/blog/types';
import {
  createDefaultState,
} from '@/store/blog/state';

const defaultPost: BlogPost = {
  id: 'test',
  title: 'Test',
  description: 'Test description',
  created: 0,
  isVisible: true,
  tags: [],
};

describe('blog.mutations', () => {
  it('updates posts', () => {
    const state: BlogState = createDefaultState();
    const updatedPosts = [ defaultPost ];
    mutations.updatePosts(state, updatedPosts);

    expect(
      state.posts,
    ).toEqual(updatedPosts);
  });

  it('updates post', () => {
    const state = createDefaultState();

    mutations.updatePost(state, defaultPost);

    expect(
      state.post,
    ).toEqual(defaultPost);
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
