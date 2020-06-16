import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, ExpansionPanel, ExpansionPanelSummary,
  ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.scss';

const SidebarElement = props => {
  const { show, name, icon, options = [], selectedProp = false, 
    selectedSubEle = false } = props;
    console.log(selectedSubEle)
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(selectedProp);

  const lightOption = (e, elementClass, subCompClass = undefined) => {
    const classToToggle = `.af-selected`;
    if (options.length <= 0 || subCompClass) {
      var elements = document.querySelectorAll(`${classToToggle}`);
      elements.forEach(el => {
        el.className = el.className.replace(/af-selected/g, "");
      });
      if (elementClass === 'af-panelSummary') setSelected(true);
    }
    if (subCompClass) {
      document.querySelector(`.${elementClass}.${subCompClass}`)
        .className += ' af-selected';
    }
  }

  return (
    <div className="af-expansionPanelContainer">
      <ExpansionPanel 
        className="af-expansionPanel" 
        expanded={expanded} 
        onChange={() => setExpanded(!expanded)}
        // onClick={(e) => lightOption(e)}
      >
        <ExpansionPanelSummary 
          className={
            `af-panelSummary 
            ${!show ? 'af-nDisplay' : ''} 
            ${(selected && options.length <= 0) ? 'af-selected' : ''}`
          }
          expandIcon={options.length > 0 ? 
            <ExpandMoreIcon className="af-icon af-expand"/> : 
            ''
          }
          onClick={(e) => lightOption(e, 'af-panelSummary')}
        >
          {icon}
          <Typography className={`af-text ${!show ? 'af-nDisplay' : ''}`} variant="subtitle2">
            {name}
          </Typography>
        </ExpansionPanelSummary>
        {options.length > 0 &&
          <ExpansionPanelDetails>
          {options.map((opt) => 
              <div 
                className={
                  `af-element 
                  ${opt.name} 
                  ${opt.id == selectedSubEle ? 'af-selected' : ''}`
                }
                key={opt.name}
                onClick={
                  (e) => lightOption(e, 'af-element', opt.name)
                }
              >
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