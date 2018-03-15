import { combineReducers } from 'redux';
import comment from './comment';
import posts from './posts';

export default combineReducers({
  comment,
  posts,
});
