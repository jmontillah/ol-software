import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, Button } from '@material-ui/core'
import GroupIcon from '@material-ui/icons/Group'
import UsersTable from './../UsersTable'
import UserModal from './../UserModal'
import './style.scss'

const Users = props => {
  const { openModal, modalTitle, showModal, hideModal } = props
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
          <Button className="af-btn" onClick={() => showModal()}>
            Crear
          </Button>
        </div>
      </div>
      <div className="af-table">
        <UsersTable />
      </div>
      <UserModal 
        open={openModal} 
        title={'Agregar nuevo usuario'}
        hide={hideModal}
      />
    </Paper>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
}

export default Users