import React, { Component, Fragment } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { AppBar, TextField, Button } from '@material-ui/core';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep(this.props);
  };

  render() {
    const { values, handleChange } = this.props;
    const theme = createMuiTheme();

    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar position='static'>
            <h3>Enter User Details</h3>
          </AppBar>
          <TextField
            placeholder='Enter Your First Name'
            label='First Name'
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            placeholder='Enter Your Last Name'
            label='Last Name'
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            placeholder='Enter Your Email'
            label='Email'
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <Button
            variant='contained'
            primary={true}
            style={{
              margin: theme.spacing(2, 'auto'),
              backgroundColor: theme.palette.primary.main,
              color: '#fff',
            }}
            onClick={this.continue}
          >
            Next
          </Button>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
