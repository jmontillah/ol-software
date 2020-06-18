import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from './../containers/LoginScreen';
import DashboardScreen from './../containers/DashboardScreen';
import ReportsScreen from './../containers/ReportsScreen';
import { checkSession } from './../utils';
import { getRoles, getUsers } from './../api';

const Routes = () => {
  const user = checkSession();
  const roles = getRoles();
  const users = getUsers();
  return (
    <Switch>
      <Route path="/login" component={LoginScreen} />
      <Route 
        path="/dashboard"
        render={props => (
          <DashboardScreen 
            {...props}
            user={user}
            roles={roles}
            users={users}
          />
        )}
      />
      <Route 
        path="/reports"
        render={props => (
          <ReportsScreen {...props} user={user}/>
        )}
      />
      <Redirect from="/" to={checkSession() ? "/dashboard" : "/login"} />
    </Switch>
  );
}

export default Routes;