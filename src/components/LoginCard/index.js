import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, InputBase, Button } from '@material-ui/core';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './style.scss';

const LoginCard = props => {
  const { user, pass, onChange, error, loginFn } = props
  return (
    <Paper className="af-loginCardPaper" elevation={3}>
      <Typography variant="h6" className="af-title">
        Inicio de sesión
      </Typography>
      <Paper className="af-inputsPaper" elevation={2}>
        <Paper className="af-inputPaper" variant="outlined">
          <InputBase 
            placeholder="Usuario"
            className="af-inputBase"
            value={user}
            onChange={(e) => onChange(e, 'user')}
          />
          <PersonOutlineOutlinedIcon className="af-icon"/>
        </Paper>
        <Paper className="af-inputPaper" variant="outlined">
          <InputBase 
            placeholder="Contraseña"
            className="af-inputBase"
            type="password"
            value={pass}
            onChange={(e) => onChange(e, 'pass')}
          />
          <LockOutlinedIcon className="af-icon"/>
        </Paper>
      </Paper>
      {error !== '' &&
       <Typography className="af-errorText" variant="subtitle2">
         {error}
       </Typography>
      }
      <Button 
        variant="contained" 
        className="af-button" 
        onClick={() => loginFn()}>
        Iniciar sesión
      </Button>
    </Paper>
  );
}

LoginCard.propTypes = {
  user: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  loginFn: PropTypes.func.isRequired,
}

export default LoginCard;