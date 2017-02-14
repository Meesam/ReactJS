import React from 'react';

class AddEmployee extends React.Component{
  constructor(props){
    super(props)
    console.log('data ' + JSON.stringify(props));
  }
  render(){
   /*
    var cOptions = this.props.genderData.map(function(item, index){
      return <option key={item.Id} value={item.Name}>{item.Name}</option>
    });*/
    return(
     <div>
       {/*<input type="button" className="btn btn-primary" onClick={this.handelGo.bind(this)}  value="Go to home" />*/}
       <form>
         <div className="form-group">
           <label htmlFor="exampleInputEmail1">Email address</label>
           <input type="text" name="email" className="form-control" value={this.props.email} aria-describedby="emailHelp" placeholder="Enter email" />
           <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
         </div>
         <div className="form-group">
           <label htmlFor="exampleInputPassword1">Password</label>
           <input type="password" name="password" className="form-control" value={this.props.password} placeholder="Password" />
         </div>
         <div className="form-group">
           <label htmlFor="exampleSelect1">Gender</label>
           <select name="gender" className="form-control" value={this.props.gender}>
             {/*{cOptions}*/}
           </select>
         </div>
         <div className="form-group">
           <label htmlFor="exampleTextarea">Address</label>
           <textarea className="form-control" name="address" value={this.props.address} rows="3"></textarea>
         </div>
         <button type="submit" className="btn btn-primary">Submit</button>
       </form>
     </div>
    )
  }

}

export default AddEmployee;