import React from 'react'
import { Dialog, DialogTitle, DialogContent, FormControl,
  InputLabel, InputBase, Select, MenuItem, Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import PropTypes from 'prop-types'
import './style.scss'

const UserModal = props => {
  const { title, open, hide, newUserForm, onChange, newUserFn, roles } = props
  return (
    <Dialog 
      open={open} 
      fullWidth={true} 
      maxWidth="md" 
      className="af-mainDialog"
      onClose={() => hide('openModal')}
    >
      <DialogTitle className="af-title">
        {title}
        <CloseIcon onClick={() => hide('openModal')}/>
      </DialogTitle>
      <DialogContent className="af-content">
        <div className="af-twoInputs">
          <FormControl className="af-formControl">
            <InputLabel className="af-inputLabel" shrink htmlFor="namesInput">
              Nombres
            </InputLabel>
            <InputBase 
              id="namesInput" 
              className="af-inputBase"
              value={newUserForm.names}
              onChange={(e) => onChange(e, 'names')}
            />
          </FormControl>
          <FormControl className="af-formControl">
          <InputLabel className="af-inputLabel" shrink htmlFor="lastnamesInput">
            Apellidos
          </InputLabel>
          <InputBase 
            id="lastnamesInput" 
            className="af-inputBase"
            value={newUserForm.surnames}
            onChange={(e) => onChange(e, 'surnames')}
          />
        </FormControl>
        </div>
        <div className="af-twoInputs">
          <FormControl className="af-formControl">
            <InputLabel className="af-inputLabel" shrink htmlFor="idInput">
              Idetificación (C.C.)
            </InputLabel>
            <InputBase 
              id="idInput" 
              className="af-inputBase"
              value={newUserForm.national_id}
              onChange={(e) => onChange(e, 'national_id')}
            />
          </FormControl>
          <FormControl className="af-formControl">
          <InputLabel className="af-inputLabel" shrink id="roleInput">
            Rol asociado
          </InputLabel>
          <Select
            labelId="roleInput"
            value={newUserForm.role}
            onChange={(e) => onChange(e, 'role')}
            input={<InputBase className="af-inputBase"/>}
          >
            {roles.map(role => 
              <MenuItem key={role._id} value={role._id}>{role.name}</MenuItem>
            )}
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
              value={newUserForm.active}
              onChange={(e) => onChange(e, 'active')}
              input={<InputBase className="af-inputBase"/>}
            >
              <MenuItem value={true}>Activo</MenuItem>
              <MenuItem value={false}>Inactivo</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="af-formControl">
            <InputLabel className="af-inputLabel" shrink htmlFor="passwordInput">
              Contraseña
            </InputLabel>
            <InputBase 
              id="passwordInput" 
              className="af-inputBase"
              value={newUserForm.password}
              onChange={(e) => onChange(e, 'password')}
            />
          </FormControl>
        </div>
        <div className="af-twoInputs">
          <FormControl className="af-formControl">
            <InputLabel className="af-inputLabel" shrink htmlFor="phoneInput">
              Teléfono
            </InputLabel>
            <InputBase 
              id="phoneInput" 
              className="af-inputBase"
              value={newUserForm.phone}
              onChange={(e) => onChange(e, 'phone')}
            />
          </FormControl>
          <FormControl className="af-formControl">
            <InputLabel className="af-inputLabel" shrink htmlFor="emailInput">
              Correo electrónico
            </InputLabel>
            <InputBase 
              id="emailInput" 
              className="af-inputBase"
              value={newUserForm.email}
              onChange={(e) => onChange(e, 'email')}
            />
          </FormControl>
        </div>
        <div className="af-buttons">
          <div className="af-btnDiv accept">
            <Button className="af-btn" onClick={() => newUserFn()}>
              Aceptar
            </Button>
          </div>
          <div className="af-btnDiv cancel">
            <Button className="af-btn" onClick={() => hide()}>
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

UserModal.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  newUserForm: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  newUserFn: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
}

export default UserModal