import React from 'react';
import Employee from './employeeContainer.jsx';
import { addEmployee,getEmployee } from '.././actions/index';

import EmployeeContainer from './employeeContainer.jsx';

const mapStateToProps = (state) => {
  return {
    getEmployee: state.employees
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEmployee: (empobj) => dispatch(addEmployee(empobj)),
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeContainer);

export default AppContainer;