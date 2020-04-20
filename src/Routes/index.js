import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginScreen from './../containers/LoginScreen'
import DashboardScreen from './../containers/DashboardScreen'

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      <Route path="/dashboard" component={DashboardScreen} />
    </Switch>
  )
}

export default Routes