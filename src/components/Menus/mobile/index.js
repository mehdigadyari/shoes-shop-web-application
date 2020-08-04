/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import menuIcon from '../../../assets/images/menu.svg'
import Logo from '../../../assets/images/brandLogo.png'
import useStyles from './index.styles'
import CartButton from '../desktop/CartButton'
import MenuItem from './MenuItem'

export default function Mobile() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const toggleOpenMenu = () => {
    setOpen(!open)
  }
  return (
    <div className={classes.root}>
      <div className={classes.rightMenu} onClick={toggleOpenMenu}>
        <img src={menuIcon} alt="shoeShop" className={classes.MenuIcon} />
      </div>
      <div className={classes.centerMenu}>
        <img src={Logo} alt="shoeShop" className={classes.textLogo} />
      </div>
      <div className={classes.leftMenu}>
        <CartButton />
      </div>
      <SwipeableDrawer
        onOpen={toggleOpenMenu}
        onClose={toggleOpenMenu}
        open={open}
      >
        <MenuItem />
      </SwipeableDrawer>
    </div>
  )
}
