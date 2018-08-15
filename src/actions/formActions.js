export const ADD_INFO = "ADD_INFO"

export const addInfo = (data) => dispatch => {
fetch(`https://script.google.com/macros/s/AKfycbwPGz6uQQS9IW33ASPYlcWaEtRMD8eDAK1ONg7lT2dREXpaSUYh/exec`, {
       method: "POST",
       headers: {
         "Content-Type": "application/x-www-form-urlencoded"
       },
       body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(loan_data =>
        dispatch({
          type: ADD_INFO,
          payload: loan_data
        }))
}
