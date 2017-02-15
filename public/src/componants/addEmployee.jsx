import React ,{ Component,PropTypes } from 'react';

export default class AddEmployee extends Component{

  handelSubmit(event){
    event.preventDefault();
    let submitOption={
      id:this.props.empObj.id,
      email:this.props.empObj.email,
      password:this.props.empObj.password,
      gender:this.props.empObj.gender,
      address:this.props.empObj.address
    }

    this.props.saveEmployee(submitOption);
  }

  handleChange(event){
    this.props.objChange(event);
  }

   render(){
     var cOptions = this.props.genderData.map(function(item, index){
       return <option key={item.Id} value={item.Name}>{item.Name}</option>
      });
    return(
       <div>
         <form onSubmit={this.handelSubmit.bind(this)}>
           <div className="form-group">
             <label htmlFor="exampleInputEmail1">Email address</label>
             <input type="text" name="email" className="form-control" value={this.props.empObj.email} onChange={this.handleChange.bind(this)} aria-describedby="emailHelp" placeholder="Enter email" />
             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
           </div>
           <div className="form-group">
             <label htmlFor="exampleInputPassword1">Password</label>
             <input type="password" name="password" className="form-control" value={this.props.empObj.password} onChange={this.handleChange.bind(this)} placeholder="Password" />
           </div>
           <div className="form-group">
             <label htmlFor="exampleSelect1">Gender</label>
              <select name="gender" className="form-control" onChange={this.handleChange.bind(this)} value={this.props.empObj.gender}>
               {cOptions}
             </select>
           </div>
           <div className="form-group">
             <label htmlFor="exampleTextarea">Address</label>
             <textarea className="form-control" name="address" onChange={this.handleChange.bind(this)} value={this.props.empObj.address} rows="3"></textarea>
           </div>
           <button type="submit" className="btn btn-primary">Submit</button>
         </form>
       </div>
     )
   }
}

AddEmployee.propTypes = {
  saveEmployee:PropTypes.func.isRequired,
  objChange:PropTypes.func.isRequired,
  empObj:PropTypes.shape({
    id      : PropTypes.number.isRequired,
    email   : PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
    gender  :PropTypes.string.isRequired
  }).isRequired,
  genderData:PropTypes.array.isRequired,
}



