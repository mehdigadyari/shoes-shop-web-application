import React from 'react'
import { Button } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import useStyles from './index.styles'
import brandLogo from '../../../assets/images/brandLogo.png'
import ProfileButton from './ProfileButton'
import CartButton from './CartButton'

export default function Desktop() {
  const classes = useStyles()
  const location = useLocation()
  const path = location.pathname

  return (
    <div className={classes.root}>
      <div className={classes.brandDiv}>
        <img src={brandLogo} alt="فروشگاه کفش" className={classes.brandImg} />
      </div>
      <div className={classes.menuDiv}>
        <div className={path === '/' ? classes.activeMenuDiv : null}>
          <Button
            className={path === '/' ? classes.activeMenu : classes.inactiveMenu}
            component={Link}
            to="/"
          >
            صفحه اصلی
          </Button>
        </div>

        <div className={path === '/faq' ? classes.activeMenuDiv : null}>
          <Button
            className={
              path === '/faq' ? classes.activeMenu : classes.inactiveMenu
            }
            component={Link}
            to="/faq"
          >
            سوالات پر تکرار
          </Button>
        </div>
        <div className={path === '/blog' ? classes.activeMenuDiv : null}>
          <Button
            className={
              path === '/blog' ? classes.activeMenu : classes.inactiveMenu
            }
            component={Link}
            to="/blog"
          >
            بلاگ
          </Button>
        </div>
        <div className={path === '/contact' ? classes.activeMenuDiv : null}>
          <Button
            className={
              path === '/contact' ? classes.activeMenu : classes.inactiveMenu
            }
            component={Link}
            to="/contact"
          >
            تماس با ما
          </Button>
        </div>
      </div>
      <div className={classes.leftMenuDiv}>
        <ProfileButton />
        <CartButton />
      </div>
    </div>
  )
}
