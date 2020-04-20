import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import Sidebar from './../../components/Sidebar'
import Navbar from './../../components/Navbar'
import Users from './../../components/Users'
import SearchForm from './../../components/SearchForm'
import Footer from './../../components/Footer'
import { checkSession, logutSession } from './../../utils'
import { getUsers, filterUsers, getRoles, createUser } from './../../api'
import './style.scss'

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: checkSession(),
      openModal: false,
      modalTitle: '',
      openConfirmModal: false,
      userId: '',
      users: getUsers(),
      roles: getRoles(),
      filterForm: {
        names: '',
        surnames: '',
        national_id: '',
        role: '',
        active: '',
        phone: '',
        email: ''
      },
      newUserForm: {
        names: "",
        surnames: "",
        national_id: "",
        role: "",
        active: false,
        phone: "",
        email: "",
        password: ""
      }
    }
  }

  logoutFn = async () => {
    logutSession()
    this.setState({username: false})
  }

  showModal = (title) => {
    this.setState({openModal: true, modalTitle: title})
  }

  showConfirmModal = userId => {
    this.setState({openConfirmModal: true, userId})
  }

  hideModal = (modal) => {
    this.setState({[modal]: false})
  }

  onChangeFilterForm = (e, item) => {
    let stateForm = this.state.filterForm
    stateForm[item] = e.target.value
    this.setState({filterForm: stateForm})
  }

  filterUsersFn = () => {
    filterUsers(this.state.filterForm)
    this.setState({users: getUsers()})
  }

  clearFilterForm = () => {
    let stateForm = this.state.filterForm
    for (const key in stateForm) {
      if (stateForm.hasOwnProperty(key)) {
        stateForm[key] = '';
      }
    }
    this.setState({filterForm: stateForm})
  }

  onChangeNewUserForm = (e, item) => {
    let stateForm = this.state.newUserForm
    stateForm[item] = e.target.value
    this.setState({newUserForm: stateForm})
  }

  createUserFn = () => {
    createUser(this.state.newUserForm)
    this.setState({users: getUsers(), openModal: false})
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
                  userId={this.state.userId}
                  newUserForm={this.state.newUserForm}
                  onChangeNewUserForm={this.onChangeNewUserForm}
                  newUserFn={this.createUserFn}
                  roles={this.state.roles}
                />
              </Grid>
              <Grid item xs={3}>
                <SearchForm 
                  onChange={this.onChangeFilterForm}
                  filterForm={this.state.filterForm}
                  roles={this.state.roles}
                  filter={this.filterUsersFn}
                  clear={this.clearFilterForm}
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

export default DashboardScreen