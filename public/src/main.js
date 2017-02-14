/**
 * Created by administrator on 7/2/17.
 */
import React ,{ Component } from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router'
import  $ from 'jquery';
import 'bootstrap-loader';
import TopMenu from './componants/topMenu.jsx';
import Footer from './componants/footer.jsx';
import StaticContainer from './componants/container.jsx';
import Employee from './componants/employee.jsx';
import Home from './componants/home.jsx';
import About from './componants/about.jsx';


render(<TopMenu />,document.getElementById('topmenu'));
render(<Footer />,document.getElementById('appfooter'));
render(
    <Router history={browserHistory}>
      <Route path="/" component={Employee} />
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
   </Router>,
     document.getElementById('app')
	);

 
