import React, { useState } from 'react'
import { Typography, Divider, ExpansionPanel, ExpansionPanelSummary,
  ExpansionPanelDetails } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MapIcon from '@material-ui/icons/Map'
import ListIcon from '@material-ui/icons/List'
import TuneIcon from '@material-ui/icons/Tune'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import ContactsIcon from '@material-ui/icons/Contacts'
import './style.scss'

const Sidebar = () => {
  const [tryy, setTryy] = useState(false)
  return (
    <div className="af-sidebarContainer">
      <div className="af-title">
        <FiberManualRecordIcon className="af-icon" fontSize="large"/>
        <Typography className="af-text" variant="subtitle1">
          OLSoftware
        </Typography>
      </div>
      <Divider className="af-divider"/>
      <div className="af-content">
        <ExpansionPanel className="af-expansionPanel" expanded={tryy} onChange={() => setTryy(!tryy)}>
          <ExpansionPanelSummary 
            className="af-panelSummary"
            expandIcon={<ExpandMoreIcon className="af-icon af-expand"/>}>
            <MapIcon className="af-icon"/>
            <Typography className="af-text" variant="subtitle2">
              Programación
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel className="af-expansionPanel" expanded={tryy} onChange={() => setTryy(!tryy)}>
          <ExpansionPanelSummary 
            className="af-panelSummary"
            expandIcon={<ExpandMoreIcon className="af-icon af-expand"/>}>
            <ListIcon className="af-icon"/>
            <Typography className="af-text" variant="subtitle2">
              Gestión de operaciones
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel className="af-expansionPanel" expanded={tryy} onChange={() => setTryy(!tryy)}>
          <ExpansionPanelSummary 
            className="af-panelSummary"
            expandIcon={<ExpandMoreIcon className="af-icon af-expand"/>}>
            <TuneIcon className="af-icon"/>
            <Typography className="af-text" variant="subtitle2">
              Perfiles
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="af-element">
              <AssignmentIndIcon className="af-icon"/>
              <Typography className="af-text" variant="subtitle2">
                Roles
              </Typography>
            </div>
            <div className="af-element">
              <ContactsIcon className="af-icon"/>
              <Typography className="af-text" variant="subtitle2">
                Usuarios
              </Typography>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className="af-expansionPanel" expanded={tryy} onChange={() => setTryy(!tryy)}>
          <ExpansionPanelSummary 
            className="af-panelSummary"
            expandIcon={<ExpandMoreIcon className="af-icon af-expand"/>}>
            <InsertDriveFileIcon className="af-icon"/>
            <Typography className="af-text" variant="subtitle2">
              Reportes
            </Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </div>
    </div>
  )
}

export default Sidebar