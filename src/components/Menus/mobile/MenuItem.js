import React from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../../assets/images/brandLogo.png'
import HomeIcon from '../../../assets/images/home.svg'
import faqIcon from '../../../assets/images/faq.png'
import unhealthyIcon from '../../../assets/images/unhealthy.png'
import useStyle from './menuItem.styles'

export default function MenuItem() {
  const classes = useStyle()
  const location = useLocation()
  const path = location.pathname
  return (
    <div className={classes.root}>
      <div className={classes.topDrawer}>
        <img alt="shoeShop" src={Logo} className={classes.drawerLogo} />
      </div>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <img alt="shoeShop" src={HomeIcon} className={classes.homeIcon} />
        </ListItemIcon>
        <ListItemText>
          <Typography
            variant="body2"
            color={path === '/' ? 'primary' : 'textSecondary'}
          >
            صفحه اصلی
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/faq">
        <ListItemIcon>
          <img alt="shoeShop" src={faqIcon} className={classes.homeIcon} />
        </ListItemIcon>
        <ListItemText>
          <Typography
            variant="body2"
            color={path === '/faq' ? 'primary' : 'textSecondary'}
          >
            سوالات پر تکرار
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/blog">
        <ListItemIcon>
          <img
            alt="shoeShop"
            src={unhealthyIcon}
            className={classes.homeIcon}
          />
        </ListItemIcon>
        <ListItemText>
          <Typography
            variant="body2"
            color={path === '/blog' ? 'primary' : 'textSecondary'}
          >
            بلاگ
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/contact">
        <ListItemIcon>
          <img alt="shoeShop" src={HomeIcon} className={classes.homeIcon} />
        </ListItemIcon>
        <ListItemText>
          <Typography
            variant="body2"
            color={path === '/contact' ? 'primary' : 'textSecondary'}
          >
            تماس با ما
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <img alt="shoeShop" src={HomeIcon} className={classes.homeIcon} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2" color="textSecondary">
            ورود/ثبت نام
          </Typography>
        </ListItemText>
      </ListItem>
    </div>
  )
}
