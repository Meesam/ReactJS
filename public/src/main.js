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
import Employee from './componants/employee.jsx';
import Home from './componants/home.jsx';
import About from './componants/about.jsx';

render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component = {Home} />
        <Route path="/employee" component={Employee} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
      </Route>
   </Router>,
     document.getElementById('app')
	);

 
