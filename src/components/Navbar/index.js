import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import './style.scss'

const Navbar = props => {
  const { username, logoutFn } = props
  return (
    <div className="af-navbarContainer">
      <div className="af-left">
        <MenuIcon className="af-icon"/>
        <Typography variant="h6" className="af-title">
          Prueba Front-end
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
  )
}

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
  logoutFn: PropTypes.func.isRequired,
}

export default Navbar