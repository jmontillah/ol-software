import React from 'react'
import { Paper, Typography, FormControl, InputLabel, InputBase,
  Select, MenuItem, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import './style.scss'

const SearchForm = () => {
  return (
    <div className="af-searchFormContainer">
      <Paper className="af-mainPaper" variant="outlined">
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
            <InputBase id="namesInput" className="af-inputBase"/>
          </FormControl>
          <FormControl className="af-formControl">
            <InputLabel className="af-inputLabel" shrink htmlFor="lastnamesInput">
              Apellidos
            </InputLabel>
            <InputBase id="lastnamesInput" className="af-inputBase"/>
          </FormControl>
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
          <div className="af-buttons">
            <Button className="af-btn filter">Filtrar</Button>
            <Button className="af-btn clear">Limpiar</Button>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default SearchForm