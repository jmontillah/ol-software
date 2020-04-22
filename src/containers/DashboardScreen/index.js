import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import Sidebar from './../../components/Sidebar'
import Navbar from './../../components/Navbar'
import Users from './../../components/Users'
import SearchForm from './../../components/SearchForm'
import Footer from './../../components/Footer'
import { checkSession, logutSession } from './../../utils'
import { getUsers, filterUsers, getRoles, createUser, getUser,
  updateUser } from './../../api'
import './style.scss'

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: checkSession(),
      sidebarExpanded: false,
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
        _id: "",
        names: "",
        surnames: "",
        national_id: "",
        role: "",
        active: false,
        phone: "",
        email: "",
        password: ""
      },
      editInModal: false
    }
  }

  toggleSidebar = () => this.setState({sidebarExpanded: !this.state.sidebarExpanded})

  logoutFn = async () => {
    logutSession()
    this.setState({username: false})
  }

  showModal = (title, userId = '') => {
    if (userId !== '') {
      const userToEdit = getUser(userId)
      this.setState({
        openModal: true,
        modalTitle: title,
        newUserForm: userToEdit, 
        editInModal: true
      })
    } else {
      this.setState({
        openModal: true,
        modalTitle: title,
        editInModal: false,
        newUserForm: {
          _id: "",
          names: "",
          surnames: "",
          national_id: "",
          role: "",
          active: false,
          phone: "",
          email: "",
          password: ""
        }
      })
    }
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

  updateUserFn = () => {
    updateUser(this.state.newUserForm)
    this.setState({users: getUsers(), openModal: false})
  }

  render() {
    return (
      <div className="af-dashboardContainer">
        {!this.state.username &&
          <Redirect to="/login" />
        }
        <Grid container spacing={0}>
          <Grid 
            className={!this.state.sidebarExpanded ? 'af-sbNExpanded' : ''} 
            item 
            xs={2}
          >
            <Sidebar show={this.state.sidebarExpanded}/>
          </Grid>
          <Grid 
            item 
            xs={10} 
            className={`af-content ${!this.state.sidebarExpanded ? 'af-cntNExpanded' : ''}`}
          >
            <Navbar 
              username={this.state.username}
              logoutFn={this.logoutFn}
              toggleSidebar={this.toggleSidebar}
            />
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
                  updateUser={this.updateUserFn}
                  editInModal={this.state.editInModal}
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