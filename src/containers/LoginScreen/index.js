import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginCard from './../../components/LoginCard';
import { login as loginApi } from './../../api';
import Loading from './../../components/Loading';
import { setUser } from './../../actions/setUser';
import './style.scss';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      loading: false,
      user: props.user
    }
  }

  login = form => {
    const { email, pass } = form;
    const loginRes = loginApi(email, pass);
    if (!loginRes) return this.setState({
      error: 'Hubo un error, verifica los campos.'
    });
    if (!loginRes.active) return this.setState({
      error: 'El usuario no está activo.'
    });
    const { names, surnames, phone } = loginRes;
    const userObj = {
      names,
      surnames,
      role: loginRes.role.name,
      phone,
      email: loginRes.email,
      username: names + ' ' + surnames
    };
    this.props.setUser(userObj);
    this.setState({user: userObj});
  }

  render() {
    return (
      <div className="af-loginScreenContainer">
        {this.state.user.username &&
          <Redirect to={{
            pathname: "/dashboard",
            // state: { username: this.state.username }
          }} />
        }
        <div className="af-text">
          <Typography className="af-title" variant="h4">
            Administrador <br />
            de usuarios
          </Typography>
          <Typography variant="body1">
            Administrador web
          </Typography>
        </div>
        <div className="af-loginCard">
          <LoginCard 
            loginFn={this.login} 
            error={this.state.error}
          />
        </div>
        {this.state.loading &&
          <Loading />
        }
      </div>
    );
  }
}

LoginScreen.propTypes = {
  setUser: PropTypes.func.isRequired,
}

export default connect(null, { setUser })(LoginScreen);