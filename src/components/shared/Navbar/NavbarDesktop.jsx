import React from 'react'
import { Icon, Menu, Dropdown } from 'antd'
import styled from 'styled-components'
import { AvatarWithUsername } from '../generic'

export const menu = (logout, goToProfile) => {
  return (
    <Menu>
      <Menu.Item key="0">
        <div role="button" onClick={goToProfile}>
          <MenuIcon type="info-circle" />
          Profile
        </div>
      </Menu.Item>
      <Menu.Item key="1">
        <div role="button" onClick={logout}>
          <MenuIcon type="logout" />
          Logout
        </div>
      </Menu.Item>
    </Menu>
  )
}

const NavbarDesktop = ({ user, logout, goToProfile }) => (
  <Dropdown placement="bottomRight" overlay={menu(logout, goToProfile)} trigger={['click']}>
    <AvatarWithUsername user={user} />
  </Dropdown>
)

const MenuIcon = styled(Icon)`
  margin-right: 8px;
`

export default NavbarDesktop
