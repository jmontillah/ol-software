import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import CustomPieChart from './../../components/CustomPieChart';
import Navbar from './../../components/Navbar';
import Sidebar from './../../components/Sidebar';
import Footer from './../../components/Footer';
import { logoutSession } from './../../utils';
import CustomBarChart from '../../components/CustomBarChart';
import { adjustHeight } from './../../utils';
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
      colorsStateChart: ['#FFBB28', '#00C49F'],
      dataRolesChart: [],
      colorsRolesChart: ['#4D45DF', '#DE655B', '#DEC12F', '#3ADE80', '#45B7DE'],
      dataEmailsChart: [],
      colorsEmailsChart: ['#E00017', '#B0BFA4', '#B0390E', '#45E439', '#7A4633'],
    }
  }

  toggleSidebar = () => this.setState({
    sidebarExpanded: !this.state.sidebarExpanded
  });

  logoutFn = async () => {
    logoutSession();
    this.setState({username: false});
  }
  
  updateDataStatesChart = users => {
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

  updateDataRolesChart = users => {
    const { dataRolesChart } = this.state;
    dataRolesChart[0] = {name: "Usuarios por rol"};
    for (const user of users) {
      if (!dataRolesChart[0][user.role.name]) {
        dataRolesChart[0][user.role.name] = 1;
      } else {
        dataRolesChart[0][user.role.name]++;
      }
    }
    this.setState({
      ...this.state,
      dataRolesChart
    })
  }

  updateDataEmailsChart = users => {
    const { dataEmailsChart } = this.state;
    dataEmailsChart[0] = {name: "Dominios de correo"};
    for (const user of users) {
      const sliceFrom = user.email.indexOf("@") + 1;
      const emailAfterAt = user.email.slice(sliceFrom);
      const emailDomain = emailAfterAt.slice(0, emailAfterAt.indexOf('.'));
      if (!dataEmailsChart[0][emailDomain]) {
        dataEmailsChart[0][emailDomain] = 1;
      } else {
        dataEmailsChart[0][emailDomain]++;
      }
    }
    this.setState({
      ...this.state,
      dataEmailsChart
    })
    console.log(dataEmailsChart)
  }

  componentWillMount() {
    const { users } = this.props;
    this.updateDataStatesChart(users);
    this.updateDataRolesChart(users);
    this.updateDataEmailsChart(users);
  }

  componentDidMount() {
    adjustHeight("af-reportsContainer .af-content");
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
              <Grid item xs={4}>
                <CustomPieChart 
                  data={this.state.dataStatesChart}
                  colors={this.state.colorsStateChart}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomBarChart
                  data={this.state.dataRolesChart}
                  colors={this.state.colorsRolesChart}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomBarChart
                  data={this.state.dataEmailsChart}
                  colors={this.state.colorsEmailsChart}
                  layout="vertical"
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