import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import CustomPieChart from './../../components/CustomPieChart';
import Navbar from './../../components/Navbar';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import { logoutSession } from './../../utils';
import './style.scss';

class ReportsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.user,
      sidebarExpanded: false,
      dataStatesChart: [
        {name: "Activos", value: 0},
        {name: "Inactivos", value: 0}
      ],
      colorsStateChart: ['#FFBB28', '#00C49F']
    }
  }

  toggleSidebar = () => this.setState({
    sidebarExpanded: !this.state.sidebarExpanded
  });

  logoutFn = async () => {
    logoutSession();
    this.setState({username: false});
  }

  componentWillMount() {
    const { users } = this.props;
    const { dataStatesChart } = this.state;
    let index;
    for (const user of users) {
      index = user.active ?
        dataStatesChart.findIndex(data => data.name === "Activos") :
        dataStatesChart.findIndex(data => data.name === "Inactivos");
      dataStatesChart[index].value++;
    }
    this.setState({
      ...this.state,
      dataStatesChart
    });
  }

  render() {
    return (
      <div className="af-reportsContainer">
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
              optSelected="3"
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
              <Grid item xs={3}>
                <CustomPieChart 
                  data={this.state.dataStatesChart}
                  colors={this.state.colorsStateChart}
                />
              </Grid>
            </Grid>
            <Footer />
          </Grid>
        </Grid>
      </div>
    )
  }
}

ReportsScreen.propTypes = {
  user: PropTypes.string.isRequired,
}

export default ReportsScreen;