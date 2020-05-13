import React, { Component, Fragment } from 'react';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

export class Success extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep(this.props);
  };

  render() {
    const theme = createMuiTheme();

    return (
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <AppBar position='static'>
            <h1>Thanks you for your submission!</h1>
            <p>You will receiving an email for further instructions.</p>
          </AppBar>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
