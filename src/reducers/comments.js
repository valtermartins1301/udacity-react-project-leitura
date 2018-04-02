import { RECEIVE_COMMENTS } from '../actions/comment';

function comments(
  state = {
    items: [],
  },
  action,
) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        items: action.comments,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

export default comments;
