import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { connect } from 'react-redux';
import { getShowSidebar, getUser } from './../../selectors';
import { setUser } from './../../actions/setUser';
import { setShowSidebar } from './../../actions/setShowSidebar';
import './style.scss';

const Navbar = props => {
  const { user, setUser, showSidebar, setShowSidebar } = props;

  useEffect(() => {
    const sbWidth = document.querySelector(".af-sidebarContainer").offsetWidth;
    const element = document.querySelector(".af-navbarContainer");
    element.style.width = window.innerWidth - sbWidth - 44 + "px";
  }, [showSidebar])

  return (
    <div className="af-navbarContainer">
      <div className="af-left">
        <MenuIcon 
          className="af-icon" 
          onClick={() => setShowSidebar(!showSidebar)}
        />
        <Typography variant="h6" className="af-title">
          Administrador web
        </Typography>
      </div>
      <div className="af-right">
        <AccountCircleIcon className="af-icon"/>
        <Typography variant="subtitle2" className="af-name">
          {user.username}
        </Typography>
        <ExitToAppIcon 
          className="af-icon af-signOut" 
          onClick={() => setUser({})}
        />
      </div>
    </div>
  );
}

Navbar.propTypes = {
  user: PropTypes.bool.isRequired,
  setUser: PropTypes.func.isRequired,
  setShowSidebar: PropTypes.func.isRequired,
  showSidebar: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  showSidebar: getShowSidebar(state),
  user: getUser(state)
});

export default connect(mapStateToProps, { setShowSidebar, setUser })(Navbar);