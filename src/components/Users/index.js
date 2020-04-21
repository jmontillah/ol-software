import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, Button } from '@material-ui/core'
import GroupIcon from '@material-ui/icons/Group'
import UsersTable from './../UsersTable'
import UserModal from './../UserModal'
import ConfirmModal from './../ConfirmModal'
import './style.scss'

const Users = props => {
  const { users, openModal, modalTitle, showModal, hideModal, 
    openConfirmModal, showConfirmModal, userId, newUserForm,
    onChangeNewUserForm, newUserFn, roles, updateUser, editInModal } = props
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
          <Button className="af-btn" onClick={() => showModal('Agregar nuevo usuario')}>
            Crear
          </Button>
          <UserModal 
            open={openModal} 
            title={modalTitle}
            hide={hideModal}
            newUserForm={newUserForm}
            onChange={onChangeNewUserForm}
            newUserFn={newUserFn}
            roles={roles}
            updateUser={updateUser}
            edit={editInModal}
          />
          <ConfirmModal 
            open={openConfirmModal}
            hide={hideModal}
            userId={userId}
          />
        </div>
      </div>
      <div className="af-table">
        <UsersTable 
          users={users} 
          showModal={showModal} 
          showConfirmModal={showConfirmModal}
        />
      </div>
    </Paper>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  openModal: PropTypes.bool.isRequired,
  modalTitle: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  openConfirmModal: PropTypes.bool.isRequired,
  showConfirmModal: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  newUserForm: PropTypes.object.isRequired,
  onChangeNewUserForm: PropTypes.func.isRequired,
  newUserFn: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
  updateUser: PropTypes.func.isRequired,
  editInModal: PropTypes.bool.isRequired,
}

export default Users