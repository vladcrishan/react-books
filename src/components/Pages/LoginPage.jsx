import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as authSelectors from '../../state/selectors/authSelectors'
import { bindActionCreators } from 'redux'
import { Button } from 'antd'
import * as authActions from '../../state/ducks/authDuck'

export class LoginPage extends React.Component {
  render() {
    return (
      <Page>
        <Container>
          <h1>Ready to read some books?</h1>
          <Button size="large" onClick={this.login}>
            Login
          </Button>
        </Container>
      </Page>
    )
  }

  login = async () => {
    try {
      const { authActions } = this.props

      await authActions.login()
    } catch (error) {
      console.log(error)
    }
  }
}

const Page = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-top: 20vh;
`
Page.displayName = 'Page'

const Container = styled.div`
  max-width: 500px;
  text-align: center;
`
Container.displayName = 'Container'

const mapState = state => ({
  user: authSelectors.getUser(state)
})

const mapDispatch = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default connect(
  mapState,
  mapDispatch
)(LoginPage)
