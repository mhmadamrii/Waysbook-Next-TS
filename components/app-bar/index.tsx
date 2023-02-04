import React, { useEffect } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

const useStyles = makeStyles({
  container: {
    display: 'none',
    '@media(max-width: 800px)': {
      display: 'block'
    }
  }
})

const AppBarNavigation: React.FC = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.container}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="absolute">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Menu />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  )
}

export default AppBarNavigation
