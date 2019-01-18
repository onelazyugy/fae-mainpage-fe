import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export const userInfoReducer = (state = {userName:"", password:""}, action) => {
    switch (action.type) {
        case types.USERNAME:
            return { ...action.payload };
        case types.PASSWORD:
            return { ...action.payload };
        default:
            return state;
    }
}

export const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RETRIEVE_APPOINTMENT:
            return action.payload;
        default:
            return state;
    }
};

export const modalDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MODAL_OPEN:
            return { ...action.payload };
        case types.MODAL_CLOSE:
            return { ...action.payload }
        default:
            return state;
    }
};