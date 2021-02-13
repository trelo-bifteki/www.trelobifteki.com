import {
  BlogState,
} from './types';

export const createDefaultState = (): BlogState => ({
  selectedPostId: '',
  posts: [],
  post: {
    id: '',
    title: '',
    created: 0,
    description: '',
    isVisible: false,
    tags: [],
  },
  postContent: '',
});

export const state: BlogState = createDefaultState();
