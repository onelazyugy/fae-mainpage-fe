import { combineReducers } from 'redux';
import { appointmentReducer, modalDataReducer } from "./appointmentReducer";

export default combineReducers({
    appointmentReducer, 
    modalDataReducer
});