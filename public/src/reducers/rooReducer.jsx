import { combineReducers } from 'redux';
import addEmployeeReducer from './addEmployeeReducer.jsx';

const rootReducer = combineReducers({
  employee: addEmployeeReducer,
});

export default rootReducer;