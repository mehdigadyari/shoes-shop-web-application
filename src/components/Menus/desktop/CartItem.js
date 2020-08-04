import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './CartItem.styles'
import DelIcon from '../../../assets/images/delete.svg'
import ShoeIcon from '../../../assets/images/q3.jpg'

export default function CartItem() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.rightContent}>
        <img src={ShoeIcon} alt="" className={classes.ShoeImg} />
        <div className={classes.descDiv}>
          <Typography variant="h6" color="textPrimary">
            کفش ادیداس
          </Typography>
          <div className={classes.DelDiv}>
            <Typography variant="h6" color="textPrimary">
              30,000
            </Typography>
            <img src={DelIcon} alt="" className={classes.DelImg} />
          </div>
        </div>
      </div>
    </div>
  )
}
