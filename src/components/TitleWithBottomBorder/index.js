import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './index.styles'

export default function Index({ title }) {
  const classes = useStyles()
  return (
    <div className={classes.titleDiv}>
      <Typography variant="h6" color="textPrimary">
        {title}
      </Typography>
    </div>
  )
}
