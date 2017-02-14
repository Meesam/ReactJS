import React from 'react';
import { Link } from 'react-router';

class TopMenu extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">React App</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/employee">Employee</Link></li>
                <li><Link to="/about">About</Link></li>
                </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopMenu;

