import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Appointment from "./containers/Appointment";
import Container from 'muicss/lib/react/container';
import "./style/base.css";

class App extends Component {
  render() {
    return (
      <Container>
        <MuiThemeProvider>
          <BrowserRouter>
            <div className="container">
              <Route exact={true} path="/" component={Appointment} />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </Container>
    );
  }
}

export default App;
