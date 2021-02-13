import {
  BlogState,
  createEmptyBlogPost,
} from './types';

export const createDefaultState = (): BlogState => ({
  selectedPostId: '',
  posts: [],
  post: createEmptyBlogPost(),
  postContent: '',
});

export const state: BlogState = createDefaultState();
