import {
  BlogState,
} from './types';

export const createDefaultState = (): BlogState => ({
  selectedPostId: '',
  posts: [],
  post: {
  },
  postContent: '',
});

export const state: BlogState = createDefaultState();
