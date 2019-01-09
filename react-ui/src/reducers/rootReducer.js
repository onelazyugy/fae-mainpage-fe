import { combineReducers } from 'redux';
import { appointmentReducer, modalDataReducer, userInfoReducer } from "./appointmentReducer";

export default combineReducers({
    appointmentReducer, 
    modalDataReducer,
    userInfoReducer
});