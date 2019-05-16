import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authSelectors from '../state/selectors/authSelectors'

const RedirectAuthed = ({ user, ...rest }) => {
  if (user) return <Redirect to='/home' />

  return <Route {...rest} />
}

const mapState = state => ({
  user: authSelectors.getUser(state),
})

export default connect(mapState)(RedirectAuthed)
