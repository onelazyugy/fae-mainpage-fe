import * as types from "./actionTypes";
import axios from "axios";
import { CONFIG } from "../config/globals";

export const userNameChange = (userInfo) => dispatch => {
  console.log('action:', userInfo);
  dispatch({
    type: types.USERNAME,
    payload: userInfo
  });
}

export const passwordChange = (password) => dispatch => {
  dispatch({
    type: types.PASSWORD,
    payload: password
  });
}

export const retrieveAppointments = () => dispatch => {
  const url = CONFIG.url;
  axios
    .get(
        url + "/api/appointments"      
    )
    .then(result => {
      let response = result.data;
      if (response.slots.length > 0) {
        dispatch({
          type: types.RETRIEVE_APPOINTMENT,
          payload: response
        });
      }
    })
    .catch(error => {
        console.error(error);
    });
};

export const bookAppointment = (appointment) => dispatch => {
    const url = CONFIG.url;
    axios.post(url + '/api/appointment', appointment).then(result => {
        let response = result.data;
        if (response.isSuccess) {
          dispatch({
            type: types.MODAL_CLOSE,
            payload: {isOpen: false}
          });
        }
      })
      .catch(error => {
          console.error(error);
      });
  };


export const updateModalData = (modalData) => dispatch => {
    dispatch({
        type: types.MODAL_OPEN,
        payload: modalData
      });
};

