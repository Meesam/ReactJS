import React from 'react';

class Employee extends React.Component{
   constructor(props){
     super(props);
     this.state={email:'',password:'',gender:'',address:''};
   }
   static(){
     this.state.genderData=['Male','Female'];
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
     let submitOption={
       email:this.state.email,
       password:this.state.password,
       gender:this.state.gender,
       address:this.state.address
     }
     event.preventDefault();
  }
   render(){
     return(
        <form onSubmit={this.handelSubmit.bind(this)}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)} aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange.bind(this)} placeholder="Password" />
          </div>
          <div className="form-group">
            <label for="exampleSelect1">Gender</label>
            <select name="gender" className="form-control" value={this.state.gender} onChange={this.handleChange.bind(this)}>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleTextarea">Address</label>
            <textarea className="form-control" name="address" value={this.state.address} onChange={this.handleChange.bind(this)} rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

   )
   }
}

export default Employee;