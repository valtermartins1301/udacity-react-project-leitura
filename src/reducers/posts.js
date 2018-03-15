import { RECEIVE_POSTS } from '../actions/post';

function posts(
  state = {
    items: [],
  },
  action,
) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        items: action.posts,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

export default posts;
