import * as types from '../constants/actionTypes';

const initialState = {
  disPlayFormAdd: false,
  disPlayFormEdit: false,
  disPlayFormInfo: false,
}

const toggleAndCloseForm = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM_ADD:
      state = {
        disPlayFormAdd: true,
        disPlayFormEdit: false,
        disPlayFormInfo: false,
      }
      return state;
    case types.TOGGLE_FORM_EDIT:
      state = {
        disPlayFormAdd: false,
        disPlayFormEdit: true,
        disPlayFormInfo: false,
      }
      return state;
    case types.TOGGLE_FORM_INFO:
      state = {
        disPlayFormAdd: false,
        disPlayFormEdit: false,
        disPlayFormInfo: true,
      }
      return state;
    case types.CLOSE_FORM:
      state = {
        disPlayFormAdd: false,
        disPlayFormEdit: false,
        disPlayFormInfo: false,
      }
      return state;
    default:
      return state;
  }
}

export default toggleAndCloseForm;