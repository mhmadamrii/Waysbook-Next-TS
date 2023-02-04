import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import {
  ModalLoginContext,
  ModalRegisterContext,
} from '../../context/modal-context'

import Logo from '../../public/assets/Logo.png'

// MUI-styles (required)
import { Button, IconButton, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'

const useStyles = makeStyles({
  screenMobileView: {
    '@media(max-width: 800px)': {
      display: 'none'
    }
  },
  customButtonLogin: {
    padding: '10px 30px',
    height: 30,
    border: '2px solid black',
    fontWeight: 'bold',
  },
  customButtonRegister: {
    padding: '10px 30px',
    height: 30,
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: '#333333',
    },
  },
  iconBtn: {
    width: 10,
    height: 10,
  },
})

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
  logoWrapper: {
    // border: '1px solid',
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 50px',
  },
  btnGroup: {
    // border: '1px solid red',
    padding: 10,
    display: 'flex',
    gap: 10,
    width: 280,
  },
}

const NavbarUser = ({ ...otherProps }) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()
  const { open, toggleOpen } = useContext(ModalLoginContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleTranslate = (lang: string) => {
    console.log('translate', i18n.changeLanguage)
    i18n.changeLanguage(lang)
    console.log('hello')
    setAnchorEl(null)
  }
  return (
    <>
      <div style={styles.container} className={classes.screenMobileView}>
        <div style={styles.wrapper}>
          <div style={styles.logoWrapper}>
            <Image src={Logo} alt="Logo" style={styles.logo} />
          </div>

          <div style={styles.btnGroup}>
            <IconButton className={classes.iconBtn} onClick={handleClick}>
              <ArrowDropDown />
            </IconButton>
            <Button
              variant="outlined"
              className={classes.customButtonLogin}
              onClick={toggleOpen}
              {...otherProps}
            >
              {t('login')}
            </Button>
            <Button
              variant="contained"
              className={classes.customButtonRegister}
            >
              {t('register')}
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
          <MenuItem onClick={() => handleTranslate('id')}>
            translate indo
          </MenuItem>
          <MenuItem onClick={() => handleTranslate('en')}>
            {t('translateToEnglish')}
          </MenuItem>
        </Menu>
      </div>
    </>
  )
}

export default NavbarUser
