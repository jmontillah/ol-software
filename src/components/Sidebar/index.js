import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Divider } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import MapIcon from '@material-ui/icons/Map'
import ListIcon from '@material-ui/icons/List'
import TuneIcon from '@material-ui/icons/Tune'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import ContactsIcon from '@material-ui/icons/Contacts'
import SidebarElement from './../SidebarElement'
import './style.scss'

const profileOptionsArr = [{name: "Roles", icon: <AssignmentIndIcon className="af-icon"/>},
                          {name: "Usuarios", icon: <ContactsIcon className="af-icon"/>}]

const Sidebar = props => {
  const { show } = props
  return (
    <div className="af-sidebarContainer">
      <div className="af-title">
        <FiberManualRecordIcon className="af-icon" fontSize="large"/>
        <Typography className={`af-text ${!show ? 'af-nDisplay' : ''}`} variant="subtitle1">
          OLSoftware
        </Typography>
      </div>
      <Divider className="af-divider"/>
      <SidebarElement show={show} name="Programación" icon={<MapIcon className="af-icon"/>} />
      <SidebarElement show={show} name="Gestión de operaciones" icon={<ListIcon className="af-icon"/>} />
      <SidebarElement show={show} name="Perfiles" icon={<TuneIcon className="af-icon"/>} options={profileOptionsArr}/>
      <SidebarElement show={show} name="Reportes" icon={<InsertDriveFileIcon className="af-icon"/>} />
    </div>
  )
}

Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Sidebar