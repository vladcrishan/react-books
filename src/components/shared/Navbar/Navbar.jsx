import React from 'react'
import styled from 'styled-components'
import { Card, Row } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from '../../../state/ducks/authDuck'
import { getUser } from '../../../state/selectors/authSelectors'
import MediaQuery from 'react-responsive'
import NavbarMobile from './NavbarMobile'
import NavbarDesktop from './NavbarDesktop'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

const Navbar = React.memo(({ user, authActions, history }) => {
  const goToHome = () => {
    history.push('/home')
  }

  const goToProfile = () => {
    history.push('/profile')
  }

  const logout = async () => {
    await authActions.logout()
  }

  return (
    <Wrapper>
      <BoxedRow>
        <Left onClick={goToHome}>Book Library</Left>

        <Right>
          <MediaQuery minWidth={700}>
            {matches =>
              matches ? (
                <NavbarDesktop user={user} logout={logout} goToProfile={goToProfile} />
              ) : (
                <NavbarMobile user={user} logout={logout} goToProfile={goToProfile} />
              )
            }
          </MediaQuery>
        </Right>
      </BoxedRow>
    </Wrapper>
  )
})

const Wrapper = styled(Card)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  border-top: 0;

  .ant-card-body {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
Wrapper.displayName = 'Wrapper'

// Styled
const BoxedRow = styled(Row)`
  max-width: 1010px;
  width: 100%;
  padding: 26px 20px;
`
BoxedRow.displayName = 'BoxedRow'

const Left = styled.div`
  float: left;
  cursor: pointer;
`
Left.displayName = 'Left'

const Right = styled.div`
  float: right;
`
Right.displayName = 'Right'

const mapState = state => ({
  user: getUser(state)
})

const mapDispatch = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default compose(
  connect(
    mapState,
    mapDispatch
  ),
  withRouter
)(Navbar)
