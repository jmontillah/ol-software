import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Sidebar from './../../components/Sidebar'
import Navbar from './../../components/Navbar'
import Users from './../../components/Users'
import SearchForm from './../../components/SearchForm'
import Footer from './../../components/Footer'
import './style.scss'

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="af-dashboardContainer">
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10} className="af-content">
            <Navbar />
            <Grid container spacing={1} className="af-info">
              <Grid item xs={9}>
                <Users />
              </Grid>
              <Grid item xs={3}>
                <SearchForm />
              </Grid>
            </Grid>
            <Footer />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default DashboardScreen