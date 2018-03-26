import { fetchAllPosts, createPost } from '../util/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const PERSIST_POST = 'PERSIST_POST';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
  receivedAt: Date.now(),
});

export const persistPost = (...attributes) => dispatch => (
  createPost(...attributes)
    .then(() => fetchAllPosts())
    .then(posts => dispatch(receivePosts(posts)))
);

export const fetchPosts = () => dispatch => (
  fetchAllPosts()
    .then(posts => dispatch(receivePosts(posts)))
);
