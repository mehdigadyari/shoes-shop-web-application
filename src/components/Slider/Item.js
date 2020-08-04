import React from 'react'
import { Typography, Button } from '@material-ui/core'
import useStyles from './Item.styles'

export default function Item({ item }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.rightSlider}>
        <img src={item.image} alt="" className={classes.image} />
      </div>
      <div className={classes.leftSlider}>
        <Typography variant="h4">{item.title}</Typography>
        <Typography className={classes.subTitle} variant="subtitle2">
          {item.subTitle}
        </Typography>
        <Typography className={classes.subTitle} variant="body2">
          {item.price} تومان
        </Typography>
      </div>
      <div className={classes.discountDiv}>
        <Typography variant="subtitle2">{item.discount} تخفیف %</Typography>
      </div>
      <div className={classes.buttonDiv}>
        <Button variant="outlined" color="primary">
          مشاهده جزئیات
        </Button>
      </div>
    </div>
  )
}
