import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import LoginCard from './../../components/LoginCard'
import { login as loginApi } from './../../api'
import Loading from './../../components/Loading'
import { checkSession, loginSession } from './../../utils'
import './style.scss'

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      user: '',
      pass: '',
      loading: false,
      username: checkSession()
    }
  }

  login = () => {
    const loginRes = loginApi(this.state.user, this.state.pass)
    if (!loginRes) return this.setState({error: 'Hubo un error, verifica los campos.'})
    if (!loginRes.active) return this.setState({error: 'El usuario no está activo.'})
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({loading: false})
      loginSession(loginRes.names + ' ' + loginRes.surnames)
      this.setState({username: loginRes.names + ' ' + loginRes.surnames})
    }, 2000)
  }

  onChange = (e, input) => {
    this.setState({[input]: e.target.value})
  }

  render() {
    return (
      <div className="af-loginScreenContainer">
        {this.state.username &&
          <Redirect to={{
            pathname: "/dashboard",
            state: { username: this.state.username }
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
            user={this.state.user}
            pass={this.state.pass}
            onChange={this.onChange}
            loginFn={this.login} 
            error={this.state.error}
          />
        </div>
        {this.state.loading &&
          <Loading />
        }
      </div>
    )
  }
}

export default LoginScreen