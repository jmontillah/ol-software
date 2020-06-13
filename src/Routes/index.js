import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from './../containers/LoginScreen';
import DashboardScreen from './../containers/DashboardScreen';
import { checkSession } from './../utils';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      <Route path="/dashboard" component={DashboardScreen} />
      <Redirect from="/" to={checkSession() ? "/dashboard" : "/login"} />
    </Switch>
  );
}

export default Routes;