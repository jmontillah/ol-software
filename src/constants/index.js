import React from 'react';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';
import TuneIcon from '@material-ui/icons/Tune';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactsIcon from '@material-ui/icons/Contacts';

export const usersTableColumns = [
  'Nombres', 'Apellidos', 'Identificación (C.C.)','Rol asociado', 'Estado', 
  'Teléfono', 'Correo electrónico', 'Acción'
];

export const sidebarOptions = [
  {
    id: '0',
    name: "Programación",
    icon: <MapIcon className="af-icon"/>,
    options: [],
    url: ''
  },
  {
    id: '1',
    name: "Gestión de operaciones",
    icon: <ListIcon className="af-icon"/>,
    options: [],
    url: ''
  },
  {
    id: '2',
    name: "Perfiles",
    icon: <TuneIcon className="af-icon"/>,
    options: [
      {
        id: '2a',
        name: "Roles",
        icon: <AssignmentIndIcon className="af-icon"/>,
        url: '/roles'
      },
      {
        id: '2b',
        name: "Usuarios",
        icon: <ContactsIcon className="af-icon"/>,
        url: '/dashboard'
      }
    ],
  },
  {
    id: '3',
    name: "Reportes",
    icon: <InsertDriveFileIcon className="af-icon"/>,
    options: []
  }
];