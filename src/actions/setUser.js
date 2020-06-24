import { createAction } from 'redux-actions';
import { SET_USER } from './../constants';

export const setUser = createAction(SET_USER, user => user);