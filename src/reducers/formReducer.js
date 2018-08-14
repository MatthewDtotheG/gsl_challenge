import { ADD_INFO } from '../actions/types'

const initialState = {
  info: []
};

export default function(state = initialState, action){
  switch(action.type){

    case ADD_INFO:
      return {
        ...state,
        info: [action.payload, ...state.info]
      }
    default:
      return state;
  }
}
