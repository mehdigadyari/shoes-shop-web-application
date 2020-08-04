import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import useStyles from './index.styles'
import Title from '../TitleWithBottomBorder'

export default function Index() {
  const classes = useStyles()
  return (
    <Grid className={classes.root} container direction="row">
      <Grid className={classes.item} item lg={3} xs={12}>
        <Title title="فروشگاه کفش" />
        <Typography
          className={classes.address}
          variant="body2"
          color="textSecondary"
        >
          تهران، زعفرانیه، خیابان مقدس اردبیلی، مجتمع تجاری پالادیوم، واحد226
        </Typography>
        <Typography
          className={classes.address}
          variant="body2"
          color="textSecondary"
        >
          شماره تماس: 09121233355 0210026666
        </Typography>
      </Grid>
      <Grid className={classes.item} item lg={3} xs={12}>
        <Title title="ویژگی" />
        <Typography
          className={classes.address}
          variant="body2"
          color="textSecondary"
        >
          ارسال رایگان
        </Typography>
        <Typography
          className={classes.address}
          variant="body2"
          color="textSecondary"
        >
          امکان بازگشت محصول تا هفت روز
        </Typography>
        <Typography
          className={classes.address}
          variant="body2"
          color="textSecondary"
        >
          برند های اصل
        </Typography>
        <Typography
          className={classes.address}
          variant="body2"
          color="textSecondary"
        >
          بهترین قیمت ها و تخفیف ها
        </Typography>
      </Grid>
      <Grid className={classes.item} item lg={3} xs={12}>
        <Title title="برندها" />
        <Button className={classes.brandButton} variant="text">
          <Typography
            className={classes.address}
            variant="body2"
            color="textPrimary"
          >
            آدیداس
          </Typography>
        </Button>
        <Button className={classes.brandButton} variant="text">
          <Typography
            className={classes.address}
            variant="body2"
            color="textPrimary"
          >
            نایکی
          </Typography>
        </Button>
        <Button className={classes.brandButton} variant="text">
          <Typography
            className={classes.address}
            variant="body2"
            color="textPrimary"
          >
            پوما
          </Typography>
        </Button>
      </Grid>
      <Grid className={classes.item} item lg={3} xs={12}>
        <Title title="لینک های مفید" />
        <Button className={classes.brandButton} variant="text">
          <Typography
            className={classes.address}
            variant="body2"
            color="textPrimary"
          >
            سوالات پرتکرار
          </Typography>
        </Button>
        <Button className={classes.brandButton} variant="text">
          <Typography
            className={classes.address}
            variant="body2"
            color="textPrimary"
          >
            بلاگ
          </Typography>
        </Button>
        <Button className={classes.brandButton} variant="text">
          <Typography
            className={classes.address}
            variant="body2"
            color="textPrimary"
          >
            تماس باما
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
}
