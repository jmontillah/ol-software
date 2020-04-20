import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogContent, Typography, Button } from '@material-ui/core'
import './style.scss'

const ConfirmModal = props => {
  const { open, hide } = props
  return (
    <Dialog
      open={open}
      onClose={() => hide('openConfirmModal')}
      className="af-confirmModalContainer"
    >
      <DialogContent className="af-content">
        <Typography variant="body1">
          ¿Estás seguro que deseas eliminar el usuario?
        </Typography>
        <div className="af-buttons">
          <div className="af-btnDiv accept">
            <Button className="af-btn">Continuar</Button>
          </div>
          <div className="af-btnDiv cancel">
            <Button className="af-btn" onClick={() => hide('openConfirmModal')}>
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

ConfirmModal.propTypes = {
  open: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
}

export default ConfirmModal