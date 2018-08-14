import axios from 'axios';
import { ADD_INFO } from './types'


export const addInfo = (data) => dispatch => {
  axios.post('https://script.google.com/macros/s/AKfycbwPGz6uQQS9IW33ASPYlcWaEtRMD8eDAK1ONg7lT2dREXpaSUYh/exec', data)
    .then(res =>
      dispatch({
        type: ADD_INFO,
        payload: res.data
    }))
}
