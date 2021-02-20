import {
  ActionTree,
  Commit,
  MutationTree,
} from 'vuex';
import {
  RootState,
} from '../types';

export interface BlogPost {
  id: string;
  title: string;
  created: number;
  isVisible: boolean;
  tags: ReadonlyArray<string>;
}

export const createEmptyBlogPost = (): BlogPost => ({
  id: '',
  title: '',
  created: 1613845690094,
  isVisible: false,
  tags: [],
})

export interface BlogState {
  selectedPostId: string;
  posts: ReadonlyArray<BlogPost>;
  post: BlogPost;
  postContent: string;
}

export interface BlogMutationTree extends MutationTree<BlogState> {
  updatePosts(state: BlogState, posts: ReadonlyArray<BlogPost>): void;
  updatePost(state: BlogState, post: BlogPost): void;
  updatePostContent(state: BlogState, content: string): void;
  updateSelectedPostId(state: BlogState, postId: string): void;
}

export interface BlogActionTree extends ActionTree<BlogState, RootState> {
  refreshPosts({
    commit,
  }: {
    commit: Commit;
  }): Promise<ReadonlyArray<BlogPost>>;

  refreshPostContent({
    state,
    commit,
  }: {
    state: BlogState;
    commit: Commit;
  }): Promise<string>;
}
