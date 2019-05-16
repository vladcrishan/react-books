import React from 'react'
import NavRoute from './NavRoute'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authSelectors from '../state/selectors/authSelectors'

const AuthRoute = React.memo(({ user, ...rest }) => {
  if (!user) return <Redirect to='/' />

  return <NavRoute {...rest} />
})

const mapState = state => ({
  user: authSelectors.getUser(state),
})

export default connect(mapState)(AuthRoute)
