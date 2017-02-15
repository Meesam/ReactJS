import React ,{ Component } from 'react';
import { render } from 'react-dom';
import TopMenu from './topMenu.jsx';
import Footer from './footer.jsx';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
     <div>
       <TopMenu />
       <Footer />
       <div className="container">
         {this.props.children}
       </div>
     </div>
    )
  }
}


export default App;