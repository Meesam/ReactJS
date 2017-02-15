import React ,{PropType, Component} from 'react';
import request from 'superagent';
import EmployeeList from '../componants/employeeList.jsx';
import AddEmployee from '.././componants/addEmployee.jsx';

export default class Employee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      email: '',
      password: '',
      gender: '',
      address: '',
      genderData: [],
      empList: []
    }
  }

  componentWillMount() {
    request.get('/api/gender').end((err, res) => {
      this.setState({genderData: res.body});
    });
  }

  addNewEmployee(empobj) {
    this.state.empList.push(empobj);
    this.setState({empList: this.state.empList});
    this.props.onAddEmployee(empobj);
    this.props.employeeList=this.state.empList
  }

  textChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <AddEmployee empObj={this.state} genderData={this.state.genderData}
                     saveEmployee={this.addNewEmployee.bind(this)} objChange={this.textChange.bind(this)}/>
        <EmployeeList list={this.state.empList}/>
      </div>
    )
  }
}
Employee.prototype={
  employee:PropType.array,
  onAddEmployee:PropType.func
}
