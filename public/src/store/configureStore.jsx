import { applyMiddleware,createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

import rootReducer from '.././reducers/rooReducer.jsx';

const middleware=applyMiddleware(promise(),thunk,logger());


export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
      middleware,
    );
 
    return store;
}