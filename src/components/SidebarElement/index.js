import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, ExpansionPanel, ExpansionPanelSummary,
  ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.scss';
import { Link } from 'react-router-dom';

const SidebarElement = props => {
  const { show, name, icon, options = [], url, selectedProp = false, 
    selectedSubEle = false } = props;
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(selectedProp);

  useEffect(() => {
    const finded = options.findIndex(opt => opt.id === selectedSubEle);
    if (finded !== -1) setExpanded(true);
  }, [options, selectedSubEle])

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
      <Link to={url !== "" ? url : "#"}>
        <ExpansionPanel 
          className="af-expansionPanel" 
          expanded={expanded} 
          onChange={() => setExpanded(!expanded)}
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
            <Typography 
              className={`af-text ${!show ? 'af-nDisplay' : ''}`} 
              variant="subtitle2"
            >
              {name}
            </Typography>
          </ExpansionPanelSummary>
          {options.length > 0 &&
            <ExpansionPanelDetails
              className={show ? '' : 'contained'}
            >
            {options.map((opt) => 
              <Link to={opt.url !== "" ? opt.url : "#"} key={opt.name}>
                <div 
                  className={
                    `af-element 
                    ${opt.name} 
                    ${opt.id === selectedSubEle ? 'af-selected' : ''}`
                  }
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
              </Link>
            )}
            </ExpansionPanelDetails>
          }
        </ExpansionPanel>
      </Link>
    </div>
  );
}

SidebarElement.propTypes = {
  show: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  options: PropTypes.array,
  selectedProp: PropTypes.bool.isRequired, 
  selectedSubEle: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.string.isRequired,
  ]),
  url: PropTypes.string.isRequired,
}

export default SidebarElement;