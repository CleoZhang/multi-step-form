import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
  // Form states
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  };

  // Proceed to next step
  nextStep = ({ step }) => {
    this.setState({
      step: step + 1,
    });
  };

  // Handle field change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
    } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <FormPersonalDetails />;
      case 3:
        return <Confirm />;
      case 4:
        return <Success />;
      default:
        return null;
    }
  }
}

export default UserForm;