import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Typography, ExpansionPanel, ExpansionPanelSummary,
  ExpansionPanelDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './style.scss'

const SidebarElement = props => {
  const [expanded, setExpanded] = useState(false)
  const { name, icon, options = []} = props
  return (
    <div className="af-expansionPanelContainer">
      <ExpansionPanel className="af-expansionPanel" expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <ExpansionPanelSummary 
          className="af-panelSummary"
          expandIcon={<ExpandMoreIcon className="af-icon af-expand"/>}>
          {icon}
          <Typography className="af-text" variant="subtitle2">
            {name}
          </Typography>
        </ExpansionPanelSummary>
        {options.length > 0 &&
          <ExpansionPanelDetails>
          {options.map(opt => 
              <div className="af-element" key={opt.name}>
                {opt.icon}
                <Typography className="af-text" variant="subtitle2">
                  {opt.name}
                </Typography>
              </div>
          )}
          </ExpansionPanelDetails>
        }
      </ExpansionPanel>
    </div>
  )
}

SidebarElement.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  options: PropTypes.array
}

export default SidebarElement