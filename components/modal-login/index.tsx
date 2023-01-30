import React, { useState, useContext } from 'react'
import styles from './modal.module.css'
import { ModalLoginContext } from '../../context/modal-context'

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
    // border: '1px solid red'
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

const ModalLogin: React.FC = () => {
  const classes = useStyles()
  const { open, toggleOpen } = useContext(ModalLoginContext)

  return (
    <>
      <div className={styles.container}>
        <Dialog open={open} onClose={toggleOpen} fullWidth keepMounted>
          <DialogTitle style={{ backgroundColor: '#E5E5E5' }}>
            Login
          </DialogTitle>
          <DialogContent className={classes.dialog}>
            <form className={styles.formGroup}>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
              <Button variant="contained" className={classes.buttonSubmit}>
                Login
              </Button>
              <Typography>
                Don't have an account? <a href="#"> Klik Here </a>
              </Typography>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default ModalLogin
