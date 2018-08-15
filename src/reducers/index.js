import { combineReducers } from 'redux';
import formReducer from './formReducer';

export default combineReducers({
  loan_data: formReducer
});
