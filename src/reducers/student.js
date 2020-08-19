import * as types from '../constants/actionTypes';

const initialState = {};

const student = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_INFO_STUDENT:
      return action.student;
    case types.VIEW_INFO_STUDENT:
      return action.student;
    case types.SET_STUDENT:
      state = null;
      return state;
    default: return state;
  }
}

export default student;