import { createAction } from 'redux-actions';
import { SET_SHOW_SIDEBAR } from './../constants';

export const setShowSidebar = createAction(SET_SHOW_SIDEBAR, show => show);