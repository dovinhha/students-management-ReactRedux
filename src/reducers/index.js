import { combineReducers } from 'redux';
import students from './students';
import toggleAndCloseForm from './toggleAndCLoseForm';
import student from './student';
import filterNameAndStatus from './filterNameAndStatus';
import sortNameOrStatus from './sortNameOrStatus';
import searchKeyWord from './searchKeyWord';

const myReducer = combineReducers ({
  students,
  toggleAndCloseForm,
  student,
  filterNameAndStatus,
  searchKeyWord,
  sortNameOrStatus
});


export default myReducer;