import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: 300,
    height: 'auto',
    backgroundColor: '#1a222a',
    margin: 'auto',
    marginTop: 80,
    padding: 25,
    '&:focus': {
      outline: 'none'
    },
    borderRadius: 5,
    [theme.breakpoints.down('xs')]: {
      width: '80%'
    }
  },
  rootSignUp: {
    width: 550,
    height: 'auto',
    backgroundColor: '#1a222a',
    margin: 'auto',
    marginTop: 80,
    padding: 25,
    '&:focus': {
      outline: 'none'
    },
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      width: '80%'
    }
  },
  inputContainer: {
    backgroundColor: '#2a3a48',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    border: '1px solid #203d75'
  },
  input: {
    padding: 10,
    textAlign: 'right'
  },
  button: {
    marginTop: 20
  },
  buttonTwo: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'left'
  },
  buttonLabel: {
    justifyContent: 'right'
  },
  formGrid: {
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  codeDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  counterText: {
    textAlign: 'center',
    width: '100%',
    marginTop: 15,
    fontSize: 12,
    color: '#b3aeae'
  },
  buttonText: {
    fontSize: 12
  },
  SendCodeAgainButton: {
    marginTop: 15
  }
}))
