// Components
import React from 'react'
import { LoginPage, HomePage, ProfilePage } from '../components/Pages'

// Custom routes
import AuthRoute from './AuthRoute'
import RedirectAuthed from './RedirectAuthed'
import NotFound from './NotFound'

import { Switch } from 'react-router-dom'

const Routes = () => (
  <Switch>
    <RedirectAuthed path='/' exact={true} component={LoginPage} />
    <AuthRoute path='/home' exact={true} component={HomePage} />
    <AuthRoute path='/profile' exact={true} component={ProfilePage} />

    <NotFound path='*' exact={true} component={NotFound} />
  </Switch>
)

export default Routes
