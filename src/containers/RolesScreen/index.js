import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkSession } from './../../utils';

class RolesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.user,
    }
  }
  render() {
    return (
      <div className="af-rolesScreenContainer">
        {!this.state.username &&
          <Redirect to="/login" />
        }
        Roles
      </div>
    )
  }
}

RolesScreen.propTypes = {
  user: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

export default RolesScreen;