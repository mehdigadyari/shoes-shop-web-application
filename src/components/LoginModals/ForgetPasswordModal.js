/* eslint-disable react/jsx-no-duplicate-props */
import React, { useContext } from 'react'
import {
  Modal,
  TextField,
  makeStyles,
  Typography,
  Button
} from '@material-ui/core'
import useStyles from './index.styles'
import { LoginContext } from '../../contexts/LoginContext'
import { SIGNUP, SIGNIN, CODE } from '../../constants/ActionType'

const makeTextFiledStyles = makeStyles({
  underline: {
    '&&&:before': {
      borderBottom: 'none'
    },
    '&&&:after': {
      borderBottom: 'none'
    }
  }
})

export default function ForgetPasswordModal() {
  const { state, dispatch } = useContext(LoginContext)

  const classes = useStyles()
  const underlineStyles = makeTextFiledStyles()
  const forgetPasswordd = () => {
    localStorage.setItem('loginCodeType', 'forgetPass')
    dispatch({ type: CODE })
  }
  return (
    <Modal
      open={state.forgetPassword}
      onClose={() => dispatch({ type: 'closeAll' })}
    >
      <div className={classes.root}>
        <Typography variant="body2">تلفن همراه</Typography>
        <TextField
          classes={{ root: classes.inputContainer }}
          variant="filled"
          fullWidth
          size="medium"
          inputProps={{ className: classes.input }}
          InputProps={{ classes: underlineStyles }}
        />

        <Button
          fullWidth
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={forgetPasswordd}
        >
          فراموشی رمز عبور
        </Button>
        <Button
          fullWidth
          className={classes.buttonTwo}
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
          onClick={() => dispatch({ type: SIGNIN })}
        >
          بازگشت به فرم ورود
        </Button>
        <Button
          fullWidth
          className={classes.buttonTwo}
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
          onClick={() => dispatch({ type: SIGNUP })}
        >
          ثبت نام
        </Button>
      </div>
    </Modal>
  )
}
