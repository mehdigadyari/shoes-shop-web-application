import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    backgroundColor: '#131a21',
    padding: 20
  },
  item: {
    paddingRight: 40,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 10,
      marginTop: 10,
      marginBottom: 10,
      paddingBottom: 5
    }
  },
  address: {
    marginTop: 5,
    lineHeight: 2,
    fontSize: 14
  },
  brandButton: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
}))
