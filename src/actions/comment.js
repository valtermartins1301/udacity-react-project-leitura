import { fetchAllComments } from '../util/api';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments,
  receivedAt: Date.now(),
});

export const fetchComments = postId => dispatch => (
  fetchAllComments(postId)
    .then(comments => dispatch(receiveComments(comments)))
);
