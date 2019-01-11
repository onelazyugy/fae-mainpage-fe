import React, { Component } from "react";
import { connect } from "react-redux";
import { userNameChange, passwordChange } from "../actions/appointmentActions";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Appointment extends Component {
  componentDidMount = () => {
    // this.props.onRetrieveAppointments();
    console.log('componentDidMount...');
  };

  userNameChange = (event) => {
    const userName = event.target.value;
    this.props.userInfo.userName = userName;
    this.props.onUserNameChange(this.props.userInfo);
  };

  passwordChange = (event) => {
    const password = event.target.value;
    this.props.userInfo.password = password;
    this.props.onPasswordChange(this.props.userInfo);
  };

  onLogin = (event) => {
    console.log('userInfo:', this.props.userInfo);
  }

  renderLogin = () => {
    const userName = this.props.userInfo.userName === undefined ? "" : this.props.userInfo.userName;
    const password = this.props.userInfo.password === undefined ? "" : this.props.userInfo.password;
    const loginDiv = {
      border: '2px solid',
      padding: 10
    }

    return <div style={loginDiv}>
      <div>
        <TextField
          type="text"
          required
          fullWidth
          id="name"
          label="Name"
          className={""}
          value={userName}
          onChange={this.userNameChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          type="password"
          required
          fullWidth
          id="password"
          label="Password"
          className={""}
          value={password}
          onChange={this.passwordChange}
          margin="normal"
          variant="outlined"
          
        />
      </div>
      <div className="mui--text-right">
        <Button variant="contained" color="primary" className={""} onClick={this.onLogin}>login</Button>
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
  onUserNameChange(userInfo) {
    dispatch(userNameChange(userInfo));
  },
  onPasswordChange(userInfo) {
    dispatch(passwordChange(userInfo));
  }
});

function mapStateToProps(state) {
  return {
    userInfo: state.userInfoReducer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);