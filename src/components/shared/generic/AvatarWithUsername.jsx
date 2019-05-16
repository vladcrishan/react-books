import React from 'react'
import styled from 'styled-components'
import { Avatar } from 'antd'

export default ({ user, ...rest }) => (
  <ProfileMenu {...rest}>
    <ProfileAvatar icon="user" src={user.avatar} />
    <Username>
      {user.first_name} {user.last_name}
    </Username>
  </ProfileMenu>
)

const ProfileAvatar = styled(Avatar)`
  margin-right: 8px;
`
ProfileAvatar.displayName = 'ProfileAvatar'

const ProfileMenu = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`
ProfileMenu.displayName = 'ProfileMenu'

const Username = styled.p`
  margin: 0;
`
Username.displayName = 'Username'
