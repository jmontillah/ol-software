import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, 
  TableBody} from '@material-ui/core'
import { usersTableColumns } from './../../constants'
import { getUsers } from './../../api'
import './style.scss'

const UsersTable = () => {
  const users = getUsers()
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
              <TableCell>Action</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UsersTable