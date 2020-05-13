import React, { Component, Fragment } from 'react';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    // 1. Connect to the api that the data suppose to be submitted to //
    // 2. May embed the email notification wiring here as well, basing on the submission result from #1 //
    this.props.nextStep(this.props);
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep(this.props);
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    const theme = createMuiTheme();

    return (
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <AppBar position='static'>
            <h3>Confirm</h3>
          </AppBar>
          <List>
            <ListItem>
              <ListItemText primary='First Name: ' secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Last Name: ' secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Email: ' secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Occupation: ' secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary='City: ' secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Bio: ' secondary={bio} />
            </ListItem>
          </List>
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
            Submit
          </Button>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
