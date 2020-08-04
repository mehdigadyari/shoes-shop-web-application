import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    width: '100%',
    height: 320,
    backgroundColor: '#011a1d',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#6e7f9daa',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  image: {
    width: 200
  },
  rightSlider: {
    width: 250,
    padding: 10
  },
  leftSlider: {
    flex: 1
  },
  subTitle: {
    marginTop: 15
  },
  discountDiv: {
    position: 'absolute',
    backgroundColor: '#811c6b',
    top: 0,
    left: 2,
    padding: 10,
    width: 110,
    borderBottomRightRadius: 100
  },
  buttonDiv: {
    position: 'absolute',
    bottom: 0,
    right: 2,
    padding: 10,
    borderBottomRightRadius: 100
  }
}))
