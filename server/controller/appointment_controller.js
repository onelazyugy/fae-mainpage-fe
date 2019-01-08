const appointmentService = require("../service/appointment");

exports.appointments = function(req, res) {
    res.send(appointmentService.getAppointments());
};

exports.appointment = function(req, res) {
    res.send(appointmentService.bookAppointment(req.body));
};