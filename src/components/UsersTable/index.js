import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TableContainer, Table, TableHead, TableRow, TableCell, 
  TableBody, TablePagination, TableFooter } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { usersTableColumns } from './../../constants';
import Aux from './../hoc/AuxFile';
import './style.scss';

const UsersTable = props => {
  const { users, showModal, showConfirmModal } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [usersToShow, setUsersToShow] = useState(
    [...users.slice(0, rowsPerPage)]
  );

  const newPageFn = (event, newPage) => {
    setPage(newPage);
    const usersFrom = newPage * rowsPerPage;
    const usersTo = usersFrom + rowsPerPage;
    setUsersToShow([...users.slice(usersFrom, usersTo)]);
  }

  return (
    <Aux>
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
            {usersToShow.map(user => 
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
                    onClick={() => showModal('Editar usuario', `${user._id}`)}
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
        </Table>
      </TableContainer>
      <TablePagination
        className="af-tablePagination"
        rowsPerPageOptions={[5, 10, 25]}
        rowsPerPage={rowsPerPage}
        component="div"
        count={users.length}
        page={page}
        onChangePage={newPageFn}
        backIconButtonText="Página anterior"
        nextIconButtonText="Página siguiente"
        labelDisplayedRows={
          ({ from, to, count }) => {
            return `${from}-${to} de ${count !== -1 ? count : `more than ${to}`}`
          }
        }
      />
    </Aux>
  );
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
  showConfirmModal: PropTypes.func.isRequired,
}

export default UsersTable;