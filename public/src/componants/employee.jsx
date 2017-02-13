import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './employeeList.jsx';

class Employee extends React.Component{
   constructor(props){
     super(props);
     this.state={id:'',email:'',password:'',gender:'',address:'',genderData:[],empList:[]};
   }
   componentWillMount() {
     var genData= [{Id:1,Name:'Male'},{Id:2,Name:'Female'}];
     this.setState({genderData:genData});
   }
   handleChange(event){
     const target = event.target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;
     this.setState({
       [name]: value
     });
   }
  handelSubmit(event){
    event.preventDefault();
    let emplist=[];
    let submitOption={
       id:this.state.id,
       email:this.state.email,
       password:this.state.password,
       gender:this.state.gender,
       address:this.state.address
     }
     this.state.empList.push(submitOption);
     this.setState({id:this.state.id+1,email:'',password:'',gender:'',address:'',empList:this.state.empList});
  }

   render(){
     var cOptions = this.state.genderData.map(function(item, index){
       return <option key={item.Id} value={item.Name}>{item.Name}</option>
     });
    return(
      <div>
       <form onSubmit={this.handelSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)} aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange.bind(this)} placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleSelect1">Gender</label>
            <select name="gender" className="form-control" value={this.state.gender} onChange={this.handleChange.bind(this)}>
              {cOptions}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleTextarea">Address</label>
            <textarea className="form-control" name="address" value={this.state.address} onChange={this.handleChange.bind(this)} rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <EmployeeList list={this.state.empList}/>
      </div>
   )
   }
}

export default Employee;