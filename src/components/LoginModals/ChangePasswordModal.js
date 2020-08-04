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
import { SIGNIN } from '../../constants/ActionType'

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

export default function ChangePasswordModal() {
  const { state, dispatch } = useContext(LoginContext)
  const classes = useStyles()
  const underlineStyles = makeTextFiledStyles()
  return (
    <Modal
      open={state.changePassword}
      onClose={() => dispatch({ type: 'closeAll' })}
    >
      <div className={classes.root}>
        <Typography variant="body2">رمز عبور جدید:</Typography>
        <TextField
          classes={{ root: classes.inputContainer }}
          variant="filled"
          fullWidth
          size="medium"
          inputProps={{ className: classes.input }}
          InputProps={{ classes: underlineStyles }}
        />
        <Typography variant="body2">تکرار رمز عبور جدید:</Typography>
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
        >
          تغییر رمز عبور
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
      </div>
    </Modal>
  )
}
