import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from './../../components/Sidebar';
import Navbar from './../../components/Navbar';
import Users from './../../components/Users';
import SearchForm from './../../components/SearchForm';
import Footer from './../../components/Footer';
import { getUsers, filterUsers, createUser, getUser,
  updateUser } from './../../api';
import { getShowSidebar } from './../../selectors';
import './style.scss';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      openModal: false,
      modalTitle: '',
      openConfirmModal: false,
      userId: '',
      users: props.users,
      roles: props.roles,
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

  createUserFn = userForm => {
    createUser(userForm);
    this.setState({users: getUsers(), openModal: false});
  }

  updateUserFn = userForm => {
    updateUser(userForm);
    this.setState({users: getUsers(), openModal: false});
  }

  render() {
    return (
      <div className="af-dashboardContainer">
        {!this.state.user.username &&
          <Redirect to="/login" />
        }
        <Grid container spacing={0}>
          <Grid 
            className={!this.props.showSidebar ? 'af-sbNExpanded' : ''} 
            item 
            xs={2}
          >
            <Sidebar 
              show={this.props.showSidebar}
              optSelected="2b"
            />
          </Grid>
          <Grid 
            item 
            xs={10} 
            className={
              `af-content 
              ${!this.props.showSidebar ? 'af-cntNExpanded' : ''}`
            }
          >
            <Navbar />
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

DashboardScreen.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  roles: PropTypes.array.isRequired,
  showSidebar: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  showSidebar: getShowSidebar(state)
});

export default connect(mapStateToProps)(DashboardScreen);