import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  titleDiv: {
    marginBottom: 10,
    paddingBottom: 15,
    position: 'relative',
    width: '100%',
    '&:after': {
      content: "''",
      position: 'absolute',
      width: 60,
      height: 4,
      bottom: 0,
      borderRadius: 4,
      backgroundColor: '#00c1c9'
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      width: 120,
      height: 4,
      bottom: 0,
      borderRadius: 4,
      backgroundColor: '#bffcff'
    }
  }
}))
