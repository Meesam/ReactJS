/**
 * Created by administrator on 7/2/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import  $ from 'jquery';
import 'bootstrap-loader';
import TopMenu from './componants/topMenu.jsx';
import Footer from './componants/footer.jsx';
import StaticContainer from './componants/container.jsx';
import Employee from './componants/employee.jsx';


ReactDOM.render(<TopMenu />,document.getElementById('topmenu'));
ReactDOM.render(<Footer />,document.getElementById('appfooter'));
ReactDOM.render(<StaticContainer />,document.getElementById('app'));
ReactDOM.render(<Employee />,document.getElementById('app'));
