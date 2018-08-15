import axios from 'axios';
import { ADD_INFO } from './types'


// export const addInfo = (data) => dispatch => {
//   console.log(data)
//   axios.post('https://script.google.com/macros/s/AKfycbwPGz6uQQS9IW33ASPYlcWaEtRMD8eDAK1ONg7lT2dREXpaSUYh/exec', data)
//     .then(res =>
//       dispatch({
//         type: ADD_INFO,
//         payload: res.data
//     }))
// }


export const addInfo = (data) => dispatch => {
  console.log(data)

  fetch(`https://script.google.com/macros/s/AKfycbwPGz6uQQS9IW33ASPYlcWaEtRMD8eDAK1ONg7lT2dREXpaSUYh/exec`,
    {
       method: "POST",
       headers: {
         "Action": "application/json",
         "Content-Type": "application/json"
       },
       body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(new_data => 
      dispatch({
          type: ADD_INFO,
          payload: new_data
    }))
}
