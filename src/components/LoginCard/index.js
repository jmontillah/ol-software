import React from 'react'
import { Paper, Typography, InputBase, Button } from '@material-ui/core'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import './style.scss'

const LoginCard = () => {
  return (
    <div className="af-loginCardContainer">
      <Paper className="af-paper" elevation={3}>
        <Typography variant="h2" class="af-title">
          Inicio de sesión
        </Typography>
        <Paper className="af-inputsPaper" elevation={2}>
          <Paper className="af-inputPaper" variant="outlined">
            <InputBase 
              placeholder="Usuario"
              className="af-inputBase"
            />
            <PersonOutlineOutlinedIcon className="af-icon"/>
          </Paper>
          <Paper className="af-inputPaper" variant="outlined">
            <InputBase 
              placeholder="Contraseña"
              className="af-inputBase"
            />
            <LockOutlinedIcon className="af-icon"/>
          </Paper>
        </Paper>
        <Button variant="contained" className="af-button">
          Iniciar sesión
        </Button>
      </Paper>
    </div>
  )
}

export default LoginCard