import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from "react-i18next";


import Logo from '../../public/assets/Logo.png'

// MUI-styles (required)
import { Button, IconButton, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  customButtonLogin: {
    // padding: '10px 30px',
    height: 30,
  },
  customButtonRegister: {
    height: 30,
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: '#333333',
    },
  },
  iconBtn: {
    width: 10,
    height: 10
  }
}))

const styles = {
  container: {
    width: 1200,
    margin: 'auto',
    position: 'absolute' as 'absolute' | 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: 100,
    height: 80,
  },
  wrapper: {
    display: 'flex',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 50px',
  },
  btnGroup: {
    border: '1px solid transparent',
    padding: 10,
    display: 'flex',
    gap: 10,
  },
}

const NavbarUser = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTranslate = (lang: string) => {
    i18n.changeLanguage(lang);
    console.log('hello')
    setAnchorEl(null);
  };
  return (
    <>
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <div>
            <Image src={Logo} alt="Logo" style={styles.logo} />
          </div>

          <div style={styles.btnGroup}>
            <IconButton className={classes.iconBtn} onClick={handleClick}>
              <ArrowDropDown />
            </IconButton>
            <Button variant="outlined" className={classes.customButtonLogin}>
              Login
            </Button>
            <Button
              variant="contained"
              className={classes.customButtonRegister}
            >
              Register
            </Button>
          </div>
        </div>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem onClick={() => handleTranslate("en")}>Option 3</MenuItem>
        </Menu>
      </div>
    </>
  )
}

export default NavbarUser
