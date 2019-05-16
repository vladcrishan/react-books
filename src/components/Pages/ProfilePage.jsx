import React from 'react'
import styled from 'styled-components'
import { getUser } from '../../state/selectors/authSelectors'
import { connect } from 'react-redux'
import { Avatar, Divider } from 'antd'

export const ProfilePage = ({ user }) => (
  <Page>
    <ProfileAvatar size={128} icon="user" src={user.avatar} />
    <Name>
      {user.first_name} {user.last_name}
    </Name>
    <h3>{user.role}</h3>
    <Divider dashed />
    <p>City: {user.city}</p>
    <p>Books: {user.books_number}</p>
    <p>Return Date: {new Date(user.return_date).toDateString()}</p>
  </Page>
)

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
Page.displayName = 'Page'

const ProfileAvatar = styled(Avatar)`
  margin-top: 50px;
  margin-bottom: 20px;
`
ProfileAvatar.displayName = 'ProfileAvatar'

const Name = styled.h2`
  margin-bottom: 0px;
`
Name.displayName = 'Name'

const mapState = state => ({
  user: getUser(state)
})

export default connect(mapState)(ProfilePage)
