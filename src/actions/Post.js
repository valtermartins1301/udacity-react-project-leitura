import { fetchAllPosts } from '../util/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
  receivedAt: Date.now(),
});

export const fetchPosts = () => dispatch => (
  fetchAllPosts()
    .then(todos => dispatch(receivePosts(todos)))
);
