import { RECEIVE_CATEGORIES } from '../actions/category';

function categories(
  state = {
    items: [],
  },
  action,
) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        items: action.categories,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

export default categories;
