import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import EmployeeReducer from './addEmployeeReducer.jsx'

export default combineReducers({
  EmployeeReducer,
  routing: routerReducer
})
