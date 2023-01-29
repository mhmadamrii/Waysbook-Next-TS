import React, { useState, useContext } from 'react'
import styles from './modal.module.css'
import { DialogContext } from '../../context/modal-context'

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
} from '@material-ui/core'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'


const useStyles = makeStyles({
  dialog: {
    height: 300,
    // width: '70%',
    border: '1px solid red'
  }
})


const ModalLogin: React.FC = () => {
  const classes = useStyles()
  const { open, toggleOpen } = useContext(DialogContext)

  return (
    <>
      <div className={styles.container}>
        <Dialog open={open} onClose={toggleOpen} fullWidth keepMounted>
          <DialogTitle>Login</DialogTitle>
          <DialogContent className={classes.dialog}>
            <form className={styles.formGroup}>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
              <Button variant="contained" color="primary">
                Login
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default ModalLogin
