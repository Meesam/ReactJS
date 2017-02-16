/**
 * Created by administrator on 7/2/17.
 */
import React ,{ Component } from 'react';
import { render } from 'react-dom';
import { Router, Route , IndexRoute } from 'react-router';
import { browserHistory } from 'react-router'
import  $ from 'jquery';
import 'bootstrap-loader';
import App from './componants/app.jsx';
import Employee from './containers/employeeContainer.jsx';
import Home from './componants/home.jsx';
import About from './componants/about.jsx';
import configureStore from './store/configureStore.jsx';
import { Provider } from 'react-redux';
import { syncHistoryWithStore} from 'react-router-redux'

//const history = syncHistoryWithStore(browserHistory, store)

//console.log(store.getState());

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
   <Employee />
  <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component = {Home} />
        <Route path="/employee" component={Employee} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
      </Route>
   </Router>
  </Provider>,
     document.getElementById('app')
	);

 
