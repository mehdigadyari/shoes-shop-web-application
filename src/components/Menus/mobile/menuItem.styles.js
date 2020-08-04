import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: 250,
    height: '100%',
    padding: 10,
    backgroundColor: '#131a21'
  },
  topDrawer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: theme.palette.border.drawerItemBorder,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid'
  },
  homeIcon: {
    width: 25,
    height: 25
  },
  drawerLogo: {
    width: 130
  }
}))
