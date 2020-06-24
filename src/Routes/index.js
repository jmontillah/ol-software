import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginScreen from './../containers/LoginScreen';
import DashboardScreen from './../containers/DashboardScreen';
import ReportsScreen from './../containers/ReportsScreen';
import { checkSession } from './../utils';
import { getRoles, getUsers } from './../api';
import { getUser } from './../selectors';

const Routes = ({ user }) => {
  const roles = getRoles();
  const users = getUsers();

  return (
    <Switch>
      <Route 
        path="/login"
        render={props => (
          <LoginScreen {...props} user={user}/>
        )}
      />
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
          <ReportsScreen {...props} user={user} users={users} roles={roles}/>
        )}
      />
      <Redirect from="/" to={user.username ? "/dashboard" : "/login"} />
    </Switch>
  );
}

Routes.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: getUser(state)
});

export default connect(mapStateToProps)(Routes);