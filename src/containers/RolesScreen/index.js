import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Sidebar from './../../components/Sidebar';
import Navbar from './../../components/Navbar';
import Footer from './../../components/Footer';
import { logoutSession } from './../../utils';
import './style.scss';

class RolesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.user,
      sidebarExpanded: false,
    }
  }

  toggleSidebar = () => this.setState({
    sidebarExpanded: !this.state.sidebarExpanded
  });

  logoutFn = async () => {
    logoutSession();
    this.setState({username: false});
  }

  render() {
    return (
      <div className="af-rolesScreenContainer">
        {!this.state.username &&
          <Redirect to="/login" />
        }
        <Grid container spacing={0}>
          <Grid 
            className={!this.state.sidebarExpanded ? 'af-sbNExpanded' : ''} 
            item 
            xs={2}
          >
            <Sidebar 
              show={this.state.sidebarExpanded}
              optSelected="2a"
            />
          </Grid>
          <Grid 
            item 
            xs={10} 
            className={
              `af-content 
              ${!this.state.sidebarExpanded ? 'af-cntNExpanded' : ''}`
            }
          >
            <Navbar 
              username={this.state.username}
              logoutFn={this.logoutFn}
              toggleSidebar={this.toggleSidebar}
              sidebarExpanded={this.state.sidebarExpanded}
            />
            <Grid container spacing={1} className="af-info">
              
            </Grid>
            <Footer />
          </Grid>
        </Grid>
      </div>
    )
  }
}

RolesScreen.propTypes = {
  user: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
}

export default RolesScreen;