import * as types from '../constants/actionTypes';

export const infoStudents = () => {
  return {
    type : types.INFO_STUDENTS
  }
};

export const saveStudent = (student) => {
  return {
    type : types.SAVE_STUDENT,
    student
  }
};

export const toggleFormAdd = () => {
  return {
    type : types.TOGGLE_FORM_ADD
  }
};

export const toggleFormEdit = () => {
  return {
    type : types.TOGGLE_FORM_EDIT
  }
};

export const toggleFormInfo = () => {
  return {
    type : types.TOGGLE_FORM_INFO
  }
};

export const closeForm = () => {
  return {
    type : types.CLOSE_FORM
  }
};

export const delStudent = (id) => {
  return {
    type : types.DEL_STUDENT,
    id
  }
}

export const onUpdateStatus = (id) => {
  return {
    type : types.ON_UPDATE_STATUS,
    id
  }
};

export const editInfoStudent= (student) => {
  return {
    type : types.EDIT_INFO_STUDENT,
    student
  }
};

export const viewInfoStudent = (student) => {
  return {
    type : types.VIEW_INFO_STUDENT,
    student
  }
}

export const setStudent = () => {
  return {
    type : types.SET_STUDENT
  }
}

export const filterNameAndStatus = (filter) => {
  return {
    type : types.FILTER_NAME_STATUS,
    filter
  }
}

export const sortNameOrStatus = (sortBy) => {
  return {
    type : types.SORT_NAME_STATUS,
    sortBy
  }
}

export const searchKeyWord = (word) => {
  return {
    type : types.SEARCH_KEY_WORD,
    word
  }
}