import React from 'react';
import { Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './style.scss';

const Loading = () => {
  return (
    <div className="af-loadingContainer">
      <Typography className="af-textLoading" variant="h5">
        Estamos preparando todo para ti
      </Typography>
      <div className="af-circles">
        <FiberManualRecordIcon className="af-circle" fontSize="small"/>
        <FiberManualRecordIcon className="af-circle" fontSize="large"/>
        <FiberManualRecordIcon className="af-circle" fontSize="small"/>
      </div>
    </div>
  );
}

export default Loading;