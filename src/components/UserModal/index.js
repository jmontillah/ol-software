import React from 'react'
import { Dialog, DialogTitle, DialogContent, FormControl,
  InputLabel, InputBase, Select, MenuItem, Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import PropTypes from 'prop-types'
import './style.scss'

const UserModal = props => {
  const { title } = props
  return (
    <Dialog open={true} fullWidth={true} maxWidth="md" className="af-mainDialog">
      <DialogTitle className="af-title">
        {title}
        <CloseIcon />
      </DialogTitle>
      <DialogContent className="af-content">
        <div className="af-twoInputs">
          <FormControl className="af-formControl">
            <InputLabel className="af-inputLabel" shrink htmlFor="namesInput">
              Nombres
            </InputLabel>
            <InputBase id="namesInput" className="af-inputBase"/>
          </FormControl>
          <FormControl className="af-formControl">
          <InputLabel className="af-inputLabel" shrink htmlFor="lastnamesInput">
            Apellidos
          </InputLabel>
          <InputBase id="lastnamesInput" className="af-inputBase"/>
        </FormControl>
        </div>
        <div className="af-twoInputs">
          <FormControl className="af-formControl">
            <InputLabel className="af-inputLabel" shrink htmlFor="idInput">
              Idetificación (C.C.)
            </InputLabel>
            <InputBase id="idInput" className="af-inputBase"/>
          </FormControl>
          <FormControl className="af-formControl">
          <InputLabel className="af-inputLabel" shrink id="roleInput">
            Rol asociado
          </InputLabel>
          <Select
            labelId="roleInput"
            value={2}
            // onChange={handleChange}
            input={<InputBase className="af-inputBase"/>}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
        </div>
        <div className="af-twoInputs">
          <FormControl className="af-formControl">
            <InputLabel className="af-inputLabel" shrink id="stateInput">
              Estado
            </InputLabel>
            <Select
              labelId="stateInput"
              value={2}
              // onChange={handleChange}
              input={<InputBase className="af-inputBase"/>}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="af-formControl">
            <InputLabel className="af-inputLabel" shrink htmlFor="passwordInput">
              Contraseña
            </InputLabel>
            <InputBase id="passwordInput" className="af-inputBase"/>
          </FormControl>
        </div>
        <div className="af-twoInputs">
          <FormControl className="af-formControl">
            <InputLabel className="af-inputLabel" shrink htmlFor="phoneInput">
              Teléfono
            </InputLabel>
            <InputBase id="phoneInput" className="af-inputBase"/>
          </FormControl>
          <FormControl className="af-formControl">
            <InputLabel className="af-inputLabel" shrink htmlFor="emailInput">
              Correo electrónico
            </InputLabel>
            <InputBase id="emailInput" className="af-inputBase"/>
          </FormControl>
        </div>
        <div className="af-buttons">
          <div className="af-btnDiv accept">
            <Button className="af-btn">Aceptar</Button>
          </div>
          <div className="af-btnDiv cancel">
            <Button className="af-btn">Cancelar</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

UserModal.propTypes = {
  title: PropTypes.string.isRequired,
}

export default UserModal