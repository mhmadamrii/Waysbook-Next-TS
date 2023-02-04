import React from 'react'
import Head from 'next/head'
import styles from './login.module.css'

// MUI styles (required)
import { TextField, Button } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'

// custom MUI-styles (required)
const useStyles = makeStyles((theme) => ({
  customBtnLogin: {
    // border: '1px solid red',
    backgroundColor: '#393939',
    color: '#ffff',
    width: 350,
    height: 50,
    marginTop: 30,
    '&:hover': {
      backgroundColor: '#393939',
    },
  },
  customInputGroup: {
    height: 50,
    '& .MuiInputBase-input': {
      backgroundColor: '#BCBCBC',
    },
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'red',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
    width: 350,
    marginBottom: 15,
  },
}))

interface Styles {}

const Login: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>Waysbook | authentication</title>
      </Head>

      <main>
        <div className={styles.container}>
          <div className={styles.inputGroup}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.customInputGroup}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className={classes.customInputGroup}
            />
            <Button variant="contained" className={classes.customBtnLogin}>
              Login
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Login
