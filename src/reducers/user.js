import { handleActions } from 'redux-actions';
import { SET_USER } from './../constants';

export const user = handleActions({
  [SET_USER]: (state, action) => action.payload
}, {})