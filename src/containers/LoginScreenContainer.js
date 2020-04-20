import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import LoginCard from './../components/LoginCard'
import { login as loginApi } from './../api'

class LoginScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      user: '',
      pass: ''
    }
  }

  login = () => {
    const loginRes = loginApi(this.state.user, this.state.pass)
    if (!loginRes) return this.setState({error: 'Hubo un error, verifica los campos.'})
    if (!loginRes.active) return this.setState({error: 'El usuario no está activo.'})
    alert('Login correcto')
  }

  onChange = (e, input) => {
    this.setState({[input]: e.target.value})
  }

  render() {
    return (
      <div className="af-loginScreenContainer">
        <div className="af-text">
          <Typography className="af-title" variant="h5">
            Aplicación<br />
            OLSoftware
          </Typography>
          <Typography variant="body2">
            Prueba práctica Front-end senior
          </Typography>
        </div>
        <div className="af-loginCard">
          <LoginCard 
            user={this.state.user}
            pass={this.state.pass}
            onChange={this.onChange}
            loginFn={this.login} 
            error={this.state.error}
          />
        </div>
      </div>
    )
  }
}

export default LoginScreenContainer