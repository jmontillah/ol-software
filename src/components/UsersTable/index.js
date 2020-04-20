import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, 
  TableBody} from '@material-ui/core'
import { usersTableColumns, fakeUsers } from './../../constants'
import './style.scss'

const UsersTable = () => {
  return (
    <TableContainer className="af-tableContainer">
      <Table size="small">
        <TableHead>
          <TableRow>
            {usersTableColumns.map(column => 
              <TableCell className="af-columnTitle">{column}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {fakeUsers.map(user => 
            <TableRow key={user._id}>
              <TableCell>{user.names}</TableCell>
              <TableCell>{user.surnames}</TableCell>
              <TableCell>{user.national_id}</TableCell>
              <TableCell>{user.role}</TableCell>
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