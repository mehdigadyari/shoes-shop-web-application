import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 5,
    // border: '1px #202d2a solid',
    width: 80,
    // boxShadow: '2px 3px 4px 0px #272b2b',
    height: '100%'
  },
  topDiv: {
    cursor: 'pointer',
    transition: '.5s',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      opacity: 0.5,
      transition: '.5s'
    },
    [theme.breakpoints.down('xs')]: {
      '&:hover': {
        opacity: 1,
        transition: '.5s'
      }
    }
  },
  shoppIcon: {
    width: 40
  },
  badge: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    top: 0,
    left: -5
  },
  cartContent: {
    width: 350,
    backgroundColor: '#2a455f',
    position: 'absolute',
    top: 70,
    right: 15,
    padding: 15,
    borderRadius: 15,
    boxShadow: '1px 1px 4px 0px #57b0b6'
  },
  priceDiv: {
    padding: 10,
    borderBottomColor: theme.palette.border.cartItemBorder,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    marginTop: 10
  }
}))
