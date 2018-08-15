export const ADD_INFO = "ADD_INFO"

const initialState = {
  data: []
};

export default function(state = initialState, action){
  switch(action.type){

    case ADD_INFO:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}
