import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { connect } from "react-redux";
import { updateModalData, retrieveAppointments } from "../actions/appointmentActions";
import { bookAppointment } from "../util/ajaxUtil";

class BookAppointmentModal extends React.Component {
    onNameChange = (event) => {
        let clonedModalData = Object.assign({}, this.props.modalData);
        clonedModalData.userInfo.name = event.target.value;
        this.props.onUpdateModalData(clonedModalData);
    };

    onPhoneChange = (event) => {
        let clonedModalData = Object.assign({}, this.props.modalData);
        clonedModalData.userInfo.phone = event.target.value;
        this.props.onUpdateModalData(clonedModalData);
    };

    onSubmit = () => {
        const appointment = {
            id: this.props.modalData.appointmentId,
            name: this.props.modalData.userInfo.name,
            phone: this.props.modalData.userInfo.phone
        }
        bookAppointment(this.bookAppointmentCallback, appointment);
    };

    bookAppointmentCallback = (response) => {
        if(response.isSuccess) {
            //close modal
            let clonedModalData = Object.assign({}, this.props.modalData);
            clonedModalData.isOpen = false;
            this.props.onUpdateModalData(clonedModalData);
            //retrieve appointments
            this.props.onRetrieveAppointments();
        }
    };

    handleClose = () => {
        let clonedModalData = Object.assign({}, this.props.modalData);
        clonedModalData.isOpen = false;
        this.props.onUpdateModalData(clonedModalData);
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.onSubmit}
            />,
        ];

        const name = this.props.modalData.userInfo === undefined ? "" : this.props.modalData.userInfo.name;
        const phone = this.props.modalData.userInfo === undefined ? "" : this.props.modalData.userInfo.phone;
        const open = this.props.modalData.isOpen === undefined ? false : this.props.modalData.isOpen;
        return (
            <div>
                <Dialog
                    title="Book an appointment"
                    actions={actions}
                    modal={false}
                    open={open}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        hintText="Enter your name"
                        floatingLabelText="Name"
                        floatingLabelFixed={true}
                        onChange={this.onNameChange}
                        value={name}
                    />
                    <TextField
                        hintText="Enter your phone number"
                        floatingLabelText="Phone"
                        floatingLabelFixed={true}
                        onChange={this.onPhoneChange}
                        value={phone}
                    />
                </Dialog>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onUpdateModalData(modalData) {
        dispatch(updateModalData(modalData));
    },
    onRetrieveAppointments() {
        dispatch(retrieveAppointments());
    }
});

function mapStateToProps(state) {
    return {
        appointments: state.appointmentReducer,
        modalData: state.modalDataReducer
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointmentModal);