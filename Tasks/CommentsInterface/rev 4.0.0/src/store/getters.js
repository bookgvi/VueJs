export const getters = {
  posts: state => {
    return state.posts
  },
  postsCount: state => {
    return state.posts.length;
  },
}
