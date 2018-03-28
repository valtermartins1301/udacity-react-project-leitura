import { combineReducers } from 'redux';
import comment from './comment';
import post from './post';
import posts from './posts';
import categories from './categories';

export default combineReducers({
  comment,
  posts,
  post,
  categories,
});
