import { ADD_INFO } from '../actions/types'

const initialState = {
  load_data: []
};

export default function(state = initialState, action){
  switch(action.type){

    case ADD_INFO:
      return {
        ...state,
        data: [action.payload, ...state.data]
      }
    default:
      return state;
  }
}
