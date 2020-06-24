import { handleActions } from 'redux-actions';
import { SET_SHOW_SIDEBAR } from '../constants';

export const showSidebar = handleActions({
  [SET_SHOW_SIDEBAR]: (state, action) => action.payload
}, false)