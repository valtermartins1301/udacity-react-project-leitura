import { combineReducers } from 'redux';
import comment from './comment';
import comments from './comments';
import post from './post';
import posts from './posts';
import categories from './categories';

export default combineReducers({
  comment,
  comments,
  posts,
  post,
  categories,
});
