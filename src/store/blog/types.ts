import {
  MutationTree,
} from 'vuex';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  created: number;
  isVisible: boolean;
  tags: ReadonlyArray<string>;
}

export interface BlogState {
  selectedPostId: string;
  posts: ReadonlyArray<BlogPost>;
  post: BlogPost;
  postContent: string;
}

export interface BlogMutationTree extends MutationTree<BlogState> {
  updatePosts: (state: BlogState, posts: ReadonlyArray<BlogPost>) => void;
  updatePost: (state: BlogState, post: BlogPost) => void;
  updatePostContent: (state: BlogState, content: string) => void;
  updateSelectedPostId: (state: BlogState, postId: string) => void;
}

