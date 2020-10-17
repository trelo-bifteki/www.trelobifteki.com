export interface BlogState {
  selectedPostId: string;
  posts: ReadonlyArray<any>;
  post: any;
  postContent: string;
}
