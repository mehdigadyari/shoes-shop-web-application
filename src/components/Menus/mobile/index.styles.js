import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    width: '100%',
    height: 70,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#131a21',
    boxShadow: '1px 0px 3px 0px #3b3939'
  },
  rightMenu: {
    width: 60,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerMenu: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  MenuIcon: {
    width: 30,
    height: 30
  },
  leftsMenu: {
    width: 60,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00'
  },
  textIcon: {
    width: '30%',
    height: 10
  }
}))
