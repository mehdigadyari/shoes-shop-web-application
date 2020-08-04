import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 5,
    // border: '1px #202d2a solid',
    cursor: 'pointer',
    width: 80,
    // boxShadow: '2px 3px 4px 0px #272b2b',
    height: '100%',
    position: 'relative'
  },
  topDiv: {
    transition: '.5s',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      opacity: 0.5,
      transition: '.5s'
    }
  },
  profileImg: {
    width: 35,
    borderColor: theme.palette.secondary.main,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 40,
    margin: 10
  },
  BottomIcon: {
    fontSize: 27,
    color: theme.palette.icon.shoppIcon
  },
  menuContent: {
    width: 200,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 64,
    borderRadius: 15,
    padding: 15
  }
}))
