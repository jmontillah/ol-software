import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './style.scss';

const Navbar = props => {
  const { username, logoutFn, toggleSidebar, sidebarExpanded } = props;

  useEffect(() => {
    const sbWidth = document.querySelector(".af-sidebarContainer").offsetWidth;
    const element = document.querySelector(".af-navbarContainer");
    element.style.width = window.innerWidth - sbWidth - 44 + "px";
  }, [sidebarExpanded])

  return (
    <div className="af-navbarContainer">
      <div className="af-left">
        <MenuIcon className="af-icon" onClick={() => toggleSidebar()}/>
        <Typography variant="h6" className="af-title">
          Administrador web
        </Typography>
      </div>
      <div className="af-right">
        <AccountCircleIcon className="af-icon"/>
        <Typography variant="subtitle2" className="af-name">
          {username}
        </Typography>
        <ExitToAppIcon 
          className="af-icon af-signOut" 
          onClick={() => logoutFn()}
        />
      </div>
    </div>
  );
}

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
  logoutFn: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  sidebarExpanded: PropTypes.bool.isRequired,
}

export default Navbar;