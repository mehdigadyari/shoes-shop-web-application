import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    padding: 10,
    borderBottomColor: theme.palette.border.cartItemBorder,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    display: 'flext',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ShoeImg: {
    width: 60,
    padding: 5,
    borderRadius: 10
    // backgroundColor: '#90caf9'
  },
  DelImg: {
    width: 30
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: '100%'
  },
  descDiv: {
    marginLeft: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  DelDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}))
