import * as types from '../constants/actionTypes';

const initialState = '';

const searchKeyWord = (state = initialState,action) => {
  switch(action.type){
    case types.SEARCH_KEY_WORD:
      return action.word;
    default: return state;
  }
}

export default searchKeyWord;