/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect, useContext } from 'react'
import { Modal, Typography, Button } from '@material-ui/core'
import ReactCodeInput from 'react-code-input'
import useStyles from './index.styles'
import { LoginContext } from '../../contexts/LoginContext'
import {
  SIGNUP,
  FORGET_PASSWORD,
  CHANGE_PASSWORD,
  SIGNIN
} from '../../constants/ActionType'

export default function CodeModal() {
  const { state, dispatch } = useContext(LoginContext)

  const [counter, setCounter] = useState(10)
  const classes = useStyles()
  const codeType = localStorage.getItem('loginCodeType')

  useEffect(() => {
    setInterval(() => {
      setCounter((oldCounter) => (oldCounter === 0 ? 0 : oldCounter - 1))
    }, 1000)
  }, [])

  const checkCode = () => {
    if (codeType === 'signUp') {
      //
    } else {
      dispatch({ type: CHANGE_PASSWORD })
    }
  }
  const sendCodeAgain = () => {
    //
    setCounter(30)
  }

  return (
    <Modal open={state.code} onClose={() => dispatch({ type: 'closeAll' })}>
      <div className={classes.root}>
        <Typography variant="body2">
          کد ارسالی به تلفن همراه را در کادر زیر وارد کنید:
        </Typography>
        <div className={classes.codeDiv} dir="ltr">
          <ReactCodeInput
            inputStyle={{
              backgroundColor: '#2a3a48',
              width: 35,
              height: 35,
              margin: 5,
              border: 'none',
              textAlign: 'center',
              color: '#fff',
              fontSize: 18
            }}
            fields={5}
          />
        </div>
        {counter !== 0 ? (
          <Typography variant="body2" className={classes.counterText}>
            {counter} ثانیه تا پایان اعتبار کد
          </Typography>
        ) : (
          <Button
            disabled={counter === 0}
            fullWidth
            variant="text"
            className={classes.SendCodeAgainButton}
            color="primary"
            onClick={sendCodeAgain}
          >
            <Typography variant="body2" className={classes.buttonText}>
              درخواست مجدد کد
            </Typography>
          </Button>
        )}

        <Button
          fullWidth
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={checkCode}
        >
          تایید کد
        </Button>
        <Button
          fullWidth
          className={classes.buttonTwo}
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
          onClick={() => {
            dispatch({ type: codeType === 'signUp' ? SIGNUP : FORGET_PASSWORD })
          }}
        >
          اصلاح شماره موبایل
        </Button>
        <Button
          fullWidth
          className={classes.buttonTwo}
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
          onClick={() => dispatch({ type: SIGNIN })}
        >
          ورود به سایت
        </Button>
      </div>
    </Modal>
  )
}
