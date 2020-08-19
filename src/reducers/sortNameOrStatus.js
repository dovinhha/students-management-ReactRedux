import * as types from '../constants/actionTypes';

const initialState = {
  name: '',
  value: 0
}

const sortNameOrStatus = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT_NAME_STATUS:
      return action.sortBy;
    default: return state;
  }
}

export default sortNameOrStatus;