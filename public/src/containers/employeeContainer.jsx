import React ,{PropType, Component} from 'react';
import { connect } from "react-redux";
import EmployeeList from '../componants/employeeList.jsx';
import AddEmployee from '.././componants/addEmployee.jsx';
import * as actions from '.././actions/index.jsx';

/*
@connect((store)=>{
  return {
    genderObj: store.genderObj,
  };
})*/
 class Employee extends Component {
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

  componentWillMount(){
    this.props.getModule();
    //this.setState({genderData: this.state.genderObj});
  }

  addNewEmployee(empobj) {
    //this.state.empList.push(empobj);
    //this.setState({empList: this.state.empList});
    //this.props.dispatch(addEmployee())
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
        <AddEmployee empObj={this.state} genderData={this.props.genderObj}
                     saveEmployee={this.addNewEmployee.bind(this)} objChange={this.textChange.bind(this)}/>
        <EmployeeList list={this.state.empList}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { genderObj: state.genderObj };
}

export default connect(mapStateToProps, actions)(Employee);





