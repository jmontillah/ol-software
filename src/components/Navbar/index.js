import React from 'react'
import PropTypes from 'prop-types'
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = props => {
  return (
    <div className="af-navbarContainer">
      Hola
    </div>
  )
}

Navbar.propTypes = {
  username: PropTypes.string.isRequired
}

export default Navbar