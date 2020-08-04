import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Hidden } from '@material-ui/core'
import useStyles from './MasterLayout.styles'
import DesktopMenu from '../components/Menus/desktop'
import MobileMenu from '../components/Menus/mobile'
import Footer from '../components/Footer'
import LoginModals from '../components/LoginModals'
import Routes from '../routes'

export default function MasterLayout() {
  const classes = useStyles()
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Hidden xsDown>
          <DesktopMenu />
        </Hidden>
        <Hidden smUp>
          <MobileMenu />
        </Hidden>
        <Routes />
        <Footer />
      </div>
      <LoginModals />
    </BrowserRouter>
  )
}
