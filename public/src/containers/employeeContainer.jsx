import React from 'react';
import AddEmployee from '.././componants/addEmployee.jsx';
import EmployeeList from '.././componants/employeeList.jsx';
import request from 'superagent';

class EmployeeContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={id:'',email:'',password:'',gender:'',address:'',genderData:[],empList:[]};
  }
  componentWillMount() {
    request.get('/api/gender').end((err,res)=>{
      console.log('genderData ' + JSON.stringify(res.body));
      this.setState({genderData: res.body});

    });
  }
  render(){
    return(
      <div>
        <AddEmployee empobj={this.state}/>
        <EmployeeList list={this.state.empList}/>
      </div>
    )
  }

}

export default EmployeeContainer;