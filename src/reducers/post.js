import { RECEIVE_POST } from '../actions/post';

function post(
  state = {
    item: {},
  },
  action,
) {
  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign({}, state, {
        item: action.post,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

export default post;
