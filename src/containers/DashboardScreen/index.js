import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import Sidebar from './../../components/Sidebar';
import Navbar from './../../components/Navbar';
import Users from './../../components/Users';
import SearchForm from './../../components/SearchForm';
import Footer from './../../components/Footer';
import { checkSession, logutSession } from './../../utils';
import { getUsers, filterUsers, getRoles, createUser, getUser,
  updateUser } from './../../api';
import './style.scss';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      sidebarExpanded: false,
      openModal: false,
      modalTitle: '',
      openConfirmModal: false,
      userId: '',
      users: [],
      roles: [],
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

  toggleSidebar = () => this.setState({
    sidebarExpanded: !this.state.sidebarExpanded
  });

  logoutFn = async () => {
    logutSession();
    this.setState({username: false});
  }

  showModal = (title, userId = '') => {
    if (userId !== '') {
      const userToEdit = getUser(userId);
      this.setState({
        openModal: true,
        modalTitle: title,
        newUserForm: userToEdit, 
        editInModal: true
      });
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
      });
    }
  }

  showConfirmModal = userId => {
    this.setState({openConfirmModal: true, userId});
  }

  hideModal = (modal) => {
    this.setState({[modal]: false});
  }

  filterUsersFn = form => {
    filterUsers(form);
    this.setState({users: getUsers()});
  }

  onChangeNewUserForm = (e, item) => {
    let stateForm = this.state.newUserForm;
    stateForm[item] = e.target.value;
    this.setState({newUserForm: stateForm});
  }

  createUserFn = () => {
    createUser(this.state.newUserForm);
    this.setState({users: getUsers(), openModal: false});
  }

  updateUserFn = () => {
    updateUser(this.state.newUserForm);
    this.setState({users: getUsers(), openModal: false});
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      username: checkSession(),
      users: getUsers(),
      roles: getRoles(),
    });
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
                  roles={this.state.roles}
                  filter={this.filterUsersFn}
                />
              </Grid>
            </Grid>
            <Footer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DashboardScreen;