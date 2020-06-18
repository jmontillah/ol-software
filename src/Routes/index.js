import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from './../containers/LoginScreen';
import DashboardScreen from './../containers/DashboardScreen';
import RolesScreen from './../containers/RolesScreen';
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
        path="/roles"
        render={props => (
          <RolesScreen {...props} user={user} roles={roles}/>
        )}
      />
      <Redirect from="/" to={checkSession() ? "/dashboard" : "/login"} />
    </Switch>
  );
}

export default Routes;