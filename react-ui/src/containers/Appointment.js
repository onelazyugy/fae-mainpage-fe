import React, { Component } from "react";
import { connect } from "react-redux";
import AppointmentSlot from "../components/AppointmentSlot";
import { userNameChange, passwordChange } from "../actions/appointmentActions";
import _ from "lodash";

import TextField from 'material-ui/TextField';
import Button from 'muicss/lib/react/button';

class Appointment extends Component {
  componentDidMount = () => {
    // this.props.onRetrieveAppointments();
  };

  onAppointmentSlotClicked = (event) => {
    const selectedAppt = _.find(this.props.appointments.slots, { 'id': parseInt(event.target.id) });
    const modalData = {
      isOpen: true,
      appointmentId: event.target.id,
      userInfo: {
        name: selectedAppt.name,
        phone: selectedAppt.phone
      }
    }
    this.props.onUpdateModalData(modalData);
  }

  userNameChange = (event) => {
    const userName = event.target.value;
    const userInfo = {userName: userName, password: ''}
    console.log('name: ' , userInfo);
    this.props.onUserNameChange(userInfo);
  };

  passwordChange = (event) => {
    const password = event.target.value;
    this.props.onPasswordChange(password);
  };

  onLogin = (event) => {
    console.log('login clicked!');
    console.log('this.props.userName:', this.props.userInfo);
  }

  renderTimeSlot = () => {
    let appointmentSlot = "no appointment slot available";
    if (this.props.appointments.slots !== undefined && this.props.appointments.slots.length > 0) {
      const slots = this.props.appointments.slots;
      appointmentSlot = <AppointmentSlot slots={slots} onAppointmentSlotClicked={this.onAppointmentSlotClicked} />
    }
    return appointmentSlot;
  };

  renderLogin = () => {
    // console.log('this.props.userName.userName:', this.props.userInfoReducer.userName);
    const userName = this.props.userInfo === undefined ? "" : this.props.userInfo.userName;
    // const userName = this.props.userName.userName === "" ? "" : this.props.userName.userName;
    console.log('render:', userName);
    const loginDiv = {
      border: '2px solid',
      padding: 10
    }
    return <div style={loginDiv}>
      <div>
        <TextField
          style={{width:'100%'}}
          // hintText="User name"
          floatingLabelText="User Name"
          floatingLabelFixed={true}
          onChange={this.userNameChange}
          value={userName}
        />
        <TextField
          style={{width:'100%'}}
          hintText="Password"
          floatingLabelText="Password"
          floatingLabelFixed={true}
          onChange={this.passwordChange}
          value={''}
        />
      </div>
      <div className="mui--text-right">
        <Button color="primary" onClick={this.onLogin}>login</Button>
      </div>
    </div>
  }

  renderGameIframe = () => {
    const iframeDiv = {
      border: '2px solid',
      marginTop: 10,
      padding: 10
    }
    return <div style={iframeDiv}>
      GAME IFRAME
    </div>
  }

  render = () => {
    return (
      <div>
        <div className="mui--text-center headerInfo">FAE MAIN PAGE FE</div>
        <h3>Login</h3>
        <div>{this.renderLogin()}</div>
        <h3>Game</h3>
        <div>{this.renderGameIframe()}</div>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  onUserNameChange(username) {
    dispatch(userNameChange(username));
  },
  onPasswordChange() {
    dispatch(passwordChange());
  }
  // onRetrieveAppointments() {
  //   dispatch(retrieveAppointments());
  // },
  // onUpdateModalData(modalData) {
  //   dispatch(updateModalData(modalData));
  // }
});

function mapStateToProps(state) {
  return {
    appointments: state.appointmentReducer,
    userInfo: state.userInfoReducer
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Appointment);