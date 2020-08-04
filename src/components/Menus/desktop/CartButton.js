/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { Typography, Button, Fade } from '@material-ui/core'
import useStyles from './cartButton.styles'
import CartIcon from '../../../assets/images/Cartt.svg'
import CartItem from './CartItem'

export default function CartButton() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <div className={classes.root}>
      <div className={classes.topDiv} onClick={() => setOpen(!open)}>
        <img src={CartIcon} alt="" className={classes.shoppIcon} />
        <div className={classes.badge}>
          <Typography variant="subtitle2" color="textPrimary">
            2
          </Typography>
        </div>
      </div>
      <Fade in={open}>
        <div className={classes.cartContent}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <div className={classes.priceDiv}>
            <Typography variant="h6" color="textPrimary">
              قیمت کل:
            </Typography>
            <Typography variant="h6" color="textPrimary">
              200.000
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="medium"
            className={classes.button}
          >
            نمایش سبد خرید
          </Button>
        </div>
      </Fade>
    </div>
  )
}
