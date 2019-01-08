let appointments = require("../model/appointment");
const _ = require("lodash");

exports.getAppointments = function() {
    return appointments;
};

exports.bookAppointment = function(appointment) {
    const index = _.findIndex(appointments.slots, {id: parseInt(appointment.id)});
    let isSuccess = false;
    if(index !== -1) {
        isSuccess = true;
        appointments.slots.map((slot)=>{
            if(slot.id === parseInt(appointment.id)) {
                slot.isSlotTaken = true;
                slot.name = appointment.name;
                slot.phone = appointment.phone;
            }
        });
    }
    return {isSuccess: isSuccess};
}