import React from 'react';

class Footer extends React.Component{
   constructor(props){
     super(props);
   }
   render(){
     return(
       <footer className="footer">
         <div className="container">
           <small className="text-muted pull-left">2015 - Sticky footer</small>
           <a href="" className="btn btn-info pull-right">Subscribe</a>
         </div>
       </footer>
     );
   }
}

export default Footer;