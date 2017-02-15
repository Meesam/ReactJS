import { createStore } from 'redux';
import rootReducer from '.././reducers/rooReducer.jsx';

export function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}