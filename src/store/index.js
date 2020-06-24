import { createStore } from 'redux';
import reducers from './../reducers';

const initialState = {
  user: {},
  showSidebar: false
}

// To see state and redux in chrome
const composeEnhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducers, initialState, composeEnhancers);