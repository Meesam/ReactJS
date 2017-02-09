/**
 * Created by administrator on 7/2/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Test from './Test.jsx';
import Custom from './Custom.jsx';
import ItemList from './ItemList.jsx';
import Form from './form.jsx';


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Test />, document.getElementById('app'));
ReactDOM.render(<Custom name="Node js"/>, document.getElementById('app'));
ReactDOM.render(<ItemList />, document.getElementById('app'));
ReactDOM.render(<Form />,document.getElementById('app'));
