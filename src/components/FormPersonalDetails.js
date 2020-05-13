import React, { Component, Fragment } from 'react';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { AppBar, TextField, Button } from '@material-ui/core';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep(this.props);
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep(this.props);
  };

  render() {
    const { values, handleChange } = this.props;
    const theme = createMuiTheme();

    return (
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <AppBar position='static'>
            <h3>Enter Personal Details</h3>
          </AppBar>
          <TextField
            placeholder='Enter Your Occupation'
            label='Occupation'
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            placeholder='Enter Your City'
            label='City'
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            placeholder='Enter Your Bio'
            label='Bio'
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          <Button
            variant='contained'
            style={{
              margin: theme.spacing(2, 1),
              backgroundColor: theme.palette.primary.main,
              color: '#fff',
            }}
            onClick={this.back}
          >
            Back
          </Button>
          <Button
            variant='contained'
            style={{
              margin: theme.spacing(2, 1),
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

export default FormPersonalDetails;
