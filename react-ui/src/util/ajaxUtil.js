import axios from "axios";
import { CONFIG } from "../config/globals";

export const bookAppointment = (callback, appointment) => {
    const url = CONFIG.url;
    axios.post(url + '/api/appointment', appointment).then(result => {
        let response = result.data;
        if (response.isSuccess) {
            callback(response);
        } else {
            response = {isSuccess: false};
            callback({response});
        }
    })
    .catch(error => {
        console.error(error);
        callback({isSuccess: false})
    });
};