import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/home'

export default function index() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}
