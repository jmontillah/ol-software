import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, FormControl, InputLabel, InputBase,
  Select, MenuItem, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import './style.scss'

const SearchForm = props => {
  let { filterForm, onChange, roles, filter, clear } = props
  return (
    <Paper className="af-searchFormPaper" variant="outlined">
      <div className="af-title">
        <SearchIcon className="af-icon"/>
        <Typography className="af-text" variant="h6">
          Filtrar búsqueda
        </Typography>
      </div>
      <div className="af-form">
        <FormControl className="af-formControl">
          <InputLabel className="af-inputLabel" shrink htmlFor="namesInput">
            Nombres
          </InputLabel>
          <InputBase 
            id="namesInput" 
            className="af-inputBase"
            value={filterForm.names}
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
            value={filterForm.surnames}
            onChange={(e) => onChange(e, 'surnames')}
          />
        </FormControl>
        <FormControl className="af-formControl">
          <InputLabel className="af-inputLabel" shrink htmlFor="idInput">
            Idetificación (C.C.)
          </InputLabel>
          <InputBase 
            id="idInput" 
            className="af-inputBase"
            value={filterForm.national_id}
            onChange={(e) => onChange(e, 'national_id')}
          />
        </FormControl>
        <FormControl className="af-formControl">
          <InputLabel className="af-inputLabel" shrink id="roleInput">
            Rol asociado
          </InputLabel>
          <Select
            labelId="roleInput"
            value={filterForm.role}
            onChange={(e) => onChange(e, 'role')}
            input={<InputBase className="af-inputBase"/>}
          >
            {roles.map(role => 
              <MenuItem key={role._id} value={role._id}>{role.name}</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl className="af-formControl">
          <InputLabel className="af-inputLabel" shrink id="stateInput">
            Estado
          </InputLabel>
          <Select
            labelId="stateInput"
            value={filterForm.active}
            onChange={(e) => onChange(e, 'active')}
            input={<InputBase className="af-inputBase"/>}
          >
            <MenuItem value={true}>Activo</MenuItem>
            <MenuItem value={false}>Inactivo</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="af-formControl">
          <InputLabel className="af-inputLabel" shrink htmlFor="phoneInput">
            Teléfono
          </InputLabel>
          <InputBase 
            id="phoneInput" 
            className="af-inputBase"
            value={filterForm.phone}
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
            value={filterForm.email}
            onChange={(e) => onChange(e, 'email')}
          />
        </FormControl>
        <div className="af-buttons">
          <Button className="af-btn filter" onClick={() => filter()}>Filtrar</Button>
          <Button className="af-btn clear" onClick={() => clear()}>Limpiar</Button>
        </div>
      </div>
    </Paper>
  )
}

SearchForm.propTypes = {
  filterForm: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
}

export default SearchForm