import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import Sidebar from './../../components/Sidebar'
import Navbar from './../../components/Navbar'
import Users from './../../components/Users'
import SearchForm from './../../components/SearchForm'
import Footer from './../../components/Footer'
import { checkSession, logutSession } from './../../utils'
import { getUsers } from './../../api'
import './style.scss'

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: checkSession(),
      openModal: false,
      modalTitle: '',
      users: getUsers(),
      openConfirmModal: false
    }
  }

  logoutFn = async () => {
    logutSession()
    this.setState({username: false})
  }

  showModal = (title) => {
    this.setState({openModal: true, modalTitle: title})
  }

  showConfirmModal = () => {
    this.setState({openConfirmModal: true})
  }

  hideModal = (modal) => {
    this.setState({[modal]: false})
  }

  render() {
    return (
      <div className="af-dashboardContainer">
        {!this.state.username &&
          <Redirect to="/login" />
        }
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10} className="af-content">
            <Navbar username={this.state.username} logoutFn={this.logoutFn}/>
            <Grid container spacing={1} className="af-info">
              <Grid item xs={9}>
                <Users 
                  openModal={this.state.openModal}
                  showModal={this.showModal}
                  hideModal={this.hideModal}
                  modalTitle={this.state.modalTitle}
                  users={this.state.users}
                  openConfirmModal={this.state.openConfirmModal}
                  showConfirmModal={this.showConfirmModal}
                />
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