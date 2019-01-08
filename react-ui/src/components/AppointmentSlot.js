import React from "react";
import Paper from 'material-ui/Paper';

const AppointmentSlot = ({slots, onAppointmentSlotClicked}) => {
    const styleNormal = {
        height: 100,
        width: 100,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
        cursor: "pointer"
    };
    const styleBooked = {
        height: 100,
        width: 100,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
        cursor: "pointer",
        backgroundColor: "red"
    };
    let apptTimeSlots = [];
    slots.map((slot, index)=>{
        let style;
        if(slot.isSlotTaken) {
            style = styleBooked;
        } else {
            style = styleNormal;
        }
        apptTimeSlots.push(<Paper key={index} id={index} style={style} zDepth={1} onClick={onAppointmentSlotClicked}>{slot.time}</Paper>);
    });
    return (
        <div>{apptTimeSlots}</div>
    );
};

export default AppointmentSlot;