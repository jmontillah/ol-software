import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, InputBase, Button } from '@material-ui/core';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './style.scss';

const LoginCard = props => {
  const { error, loginFn } = props;
  const [form, setForm] = useState({email: '', pass: ''});

  const onChange = (e, inForm) => {
    setForm({
      ...form,
      [inForm]: e.target.value
    });
  }

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
            value={form.email}
            onChange={(e) => onChange(e, 'email')}
          />
          <PersonOutlineOutlinedIcon className="af-icon"/>
        </Paper>
        <Paper className="af-inputPaper" variant="outlined">
          <InputBase 
            placeholder="Contraseña"
            className="af-inputBase"
            type="password"
            value={form.pass}
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
        onClick={() => loginFn(form)}>
        Iniciar sesión
      </Button>
    </Paper>
  );
}

LoginCard.propTypes = {
  error: PropTypes.string.isRequired,
  loginFn: PropTypes.func.isRequired,
}

export default LoginCard;