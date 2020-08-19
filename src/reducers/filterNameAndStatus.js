import * as types from '../constants/actionTypes';

const initialState = {
  name : '',
  status : -1
}

const filterNameAndStatus = (state = initialState,action) => {
  switch(action.type){
    case types.FILTER_NAME_STATUS:
      return action.filter;
    default: return state;
  }
}

export default filterNameAndStatus;