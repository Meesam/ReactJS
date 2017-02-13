import React from 'react';

var Form=React.createClass({
  getInitialState:function () {
    return ({
        EmpName:'',
        EmpClass:''
      }
    );
  },
  handelChange:function (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]:value
    })
  },
  handelSubmit:function (event) {
    console.log('got ' + this.state.EmpName);
    console.log('got ' + this.state.EmpClass);
    event.preventDefault();
  },
  render:function () {
    return(
      <div className="container">
        <form onSubmit={this.handelSubmit}>
          <label>Name</label>
          <input type="text" name="EmpName" value={this.state.EmpName} onChange={this.handelChange} />
          <input type="text" name="EmpClass" value={this.state.EmpClass} onChange={this.handelChange} />
          <input type="submit" className="btn btn-primary" value="Submit"/>
        </form>
      </div>
    );
  }
});

export default Form;
