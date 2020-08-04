import React from 'react'
import { Container, Grid } from '@material-ui/core'
import useStyles from './index.styles'
import Slider from '../../components/Slider'

export default function Index() {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid className={classes.topGrid} direction="row" container>
        <Grid className={classes.sliderGrid} item lg={5}>
          <Slider />
        </Grid>
        <Grid className={classes.brandsGrid} item lg={7}>
          brands
        </Grid>
      </Grid>
      <Grid className={classes.itemsGrid} container>
        پر فروش های مردانه
      </Grid>
      <Grid className={classes.itemsGrid} container>
        پر فروش های زنانه
      </Grid>
    </Container>
  )
}
