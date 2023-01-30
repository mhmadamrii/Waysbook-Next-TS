import React, { useState } from 'react'

// MUI-styles (required)
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles({
  dialog: {
    height: 300,
    backgroundColor: '#E5E5E5',
  },
  buttonSubmit: {
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor: '#393939',
    color: 'white',
    '&:hover': {
      backgroundColor: '#333',
    },
  },
})

const ModalRegister: React.FC = () => {
  return (
    <>
      <div>
        <h1>Helloworld</h1>
      </div>
    </>
  )
}
