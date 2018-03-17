import { fetchAllCategories } from '../util/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories,
  receivedAt: Date.now(),
});

export const fetchCategories = () => dispatch => (
  fetchAllCategories()
    .then(categories => dispatch(receiveCategories(categories)))
);
