import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TableContainer, Table, TableHead, TableRow, TableCell, 
  TableBody, TablePagination, TableFooter } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { usersTableColumns } from './../../constants'
import './style.scss'

const UsersTable = props => {
  const [page, setPage] = useState(1)
  const { users, showModal, showConfirmModal } = props
  return (
    <TableContainer className="af-tableContainer">
      <Table size="small">
        <TableHead>
          <TableRow>
            {usersTableColumns.map(column => 
              <TableCell className="af-columnTitle" key={column}>
                {column}
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => 
            <TableRow key={user._id}>
              <TableCell>{user.names}</TableCell>
              <TableCell>{user.surnames}</TableCell>
              <TableCell>{user.national_id}</TableCell>
              <TableCell>{user.role.name}</TableCell>
              <TableCell>{user.active ? 'Activo' : 'Inactivo'}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <EditIcon 
                  fontSize="small" 
                  className="af-icon af-blue"
                  onClick={() => showModal('Editar usuario')}
                />
                <DeleteIcon 
                  fontSize="small" 
                  className="af-icon"
                  onClick={() => showConfirmModal(`${user._id}`)}
                />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[]}
              rowsPerPage={8}
              component="div"
              count={users.length}
              page={page}
              onChangePage={(newPage) => setPage(newPage)}
            />
          </TableRow>
        </TableFooter> */}
      </Table>
    </TableContainer>
  )
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
  showConfirmModal: PropTypes.func.isRequired,
}

export default UsersTable