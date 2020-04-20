import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, Button } from '@material-ui/core'
import GroupIcon from '@material-ui/icons/Group'
import UsersTable from './../UsersTable'
import './style.scss'

const Users = props => {
  return (
    <Paper className="af-paperContainer" variant="outlined">
      <div className="af-header">
        <div className="af-left">
          <GroupIcon className="af-icon" />
          <Typography className="af-text" variante="subtitle1">
            Usuarios existentes
          </Typography>
        </div>
        <div className="af-right">
          <Button className="af-btn">
            Crear
          </Button>
        </div>
      </div>
      <div className="af-table">
        <UsersTable />
      </div>
    </Paper>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
}

export default Users