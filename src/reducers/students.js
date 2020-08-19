import * as types from '../constants/actionTypes';
import shortid from 'shortid';

const stds = JSON.parse(localStorage.getItem('infoStudents'));
const data = stds !== null ? stds : [];
const initialState = data;

const students = (state = initialState, action) => {
  switch (action.type) {
    case types.INFO_STUDENTS:
      return state;
    case types.SAVE_STUDENT:
      const newStudent = {
        id : action.student.id,
        studentName: action.student.studentName,
        age: action.student.age,
        phone: action.student.phone,
        homeTown: action.student.homeTown,
        sltGender: action.student.sltGender === 'false' ? false : true,
      };
      if(!newStudent.id){
        newStudent.id = shortid.generate();
        newStudent.status = true;
        state.push(newStudent);
      }
      else {
        const index1 = state.findIndex(val => val.id === newStudent.id);
        state[index1] = newStudent; 
        state[index1].status =  action.student.status;
      }
      localStorage.setItem('infoStudents', JSON.stringify(state));
      return [...state];
    case types.DEL_STUDENT:
      const index2 = state.findIndex(val => val.id === action.id);
      state.splice(index2, 1);
      localStorage.setItem('infoStudents', JSON.stringify(state))
      return [...state];
    case types.ON_UPDATE_STATUS:
      const index3 = state.findIndex(val => val.id === action.id);
      const cloneStd = { ...state[index3] };
      cloneStd.status = !cloneStd.status;
      state[index3] = cloneStd;
      localStorage.setItem('infoStudents', JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

export default students;