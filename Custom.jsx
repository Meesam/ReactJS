import React from 'react';
var Custom=React.createClass({
  getInitialState:function () {
    return {
      count:0
    }
  },
  getIncrement:function () {
    this.setState({
        count:this.state.count+1
      })
  },
  render:function () {
     return(
     <div>
       <h1>hello this is custom componant of name {this.props.name} and state count: {this.state.count} </h1>
       <input type="button" value="Increment" onClick={this.getIncrement}/>
     </div>

     );
   }
});

export default Custom;