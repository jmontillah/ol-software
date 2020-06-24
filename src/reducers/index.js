import { combineReducers } from 'redux';
import { user } from './user';
import { showSidebar } from './showSidebar';

export default combineReducers({
  user,
  showSidebar
});
