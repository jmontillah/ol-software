import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SidebarElement from './../SidebarElement';
import { sidebarOptions } from './../../constants';
import './style.scss';

const Sidebar = props => {
  const { show, optSelected } = props;
  return (
    <div className="af-sidebarContainer">
      <div className="af-title">
        <FiberManualRecordIcon className="af-icon" fontSize="large"/>
        <Typography 
          className={`af-text ${!show ? 'af-nDisplay' : ''}`} 
          variant="subtitle1"
        >
          Administrador
        </Typography>
      </div>
      <Divider className="af-divider"/>
      {
        sidebarOptions.map(option => (
          <SidebarElement 
            show={show}
            name={option.name}
            icon={option.icon}
            options={option.options}
            selectedProp={option.id == optSelected}
            selectedSubEle={
              option.options.findIndex(opt => opt.id == optSelected) != -1 &&
                optSelected
            }
          />
        ))
      }
    </div>
  );
}

Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Sidebar;