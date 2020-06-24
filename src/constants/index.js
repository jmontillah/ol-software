import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ContactsIcon from '@material-ui/icons/Contacts';

export * from './redux';

export const usersTableColumns = [
  'Nombres', 'Apellidos', 'Identificación (C.C.)','Rol asociado', 'Estado', 
  'Teléfono', 'Correo electrónico', 'Acción'
];

export const sidebarOptions = [
  {
    id: '2',
    name: "Perfiles",
    icon: <TuneIcon className="af-icon"/>,
    url: "",
    options: [
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
    options: [],
    url: "/reports"
  }
];