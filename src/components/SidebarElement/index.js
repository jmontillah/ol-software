import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, ExpansionPanel, ExpansionPanelSummary,
  ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.scss';

const SidebarElement = props => {
  const [expanded, setExpanded] = useState(false);
  const { show, name, icon, options = []} = props;

  const lightOption = (e) => {
    const classToToggle = 'af-selected';
    var elements = document.querySelectorAll(`.${classToToggle}`);
    elements.forEach(el => {
      el.className = el.className.replace(/af-selected/, "");
    });
    e.target.parentElement.parentElement.className += ' ' + classToToggle;
  }

  return (
    <div className="af-expansionPanelContainer">
      <ExpansionPanel 
        className="af-expansionPanel" 
        expanded={expanded} 
        onChange={() => setExpanded(!expanded)}
        onClick={(e) => lightOption(e)}
      >
        <ExpansionPanelSummary 
          className={`af-panelSummary ${!show ? 'af-nDisplay' : ''}`}
          expandIcon={<ExpandMoreIcon className="af-icon af-expand"/>}>
          {icon}
          <Typography className={`af-text ${!show ? 'af-nDisplay' : ''}`} variant="subtitle2">
            {name}
          </Typography>
        </ExpansionPanelSummary>
        {options.length > 0 &&
          <ExpansionPanelDetails>
          {options.map(opt => 
              <div className="af-element" key={opt.name}>
                {opt.icon}
                <Typography 
                  className={`af-text ${!show ? 'af-nDisplay' : ''}`} 
                  variant="subtitle2"
                >
                  {opt.name}
                </Typography>
              </div>
          )}
          </ExpansionPanelDetails>
        }
      </ExpansionPanel>
    </div>
  );
}

SidebarElement.propTypes = {
  show: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  options: PropTypes.array
}

export default SidebarElement;