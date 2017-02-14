import React from 'react';
import AddEmployee from './addEmployee.jsx';



class EmployeeContainer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <AddEmployee />
      </div>
    )
  }

}

export default EmployeeContainer;