import React from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import MobileMenu from './MobileMenu'
import styled from 'styled-components'
import { AvatarWithUsername } from '../generic'
import { Menu, Dropdown } from 'antd'
import * as categoriesSelectors from '../../../state/selectors/categoriesSelectors'
import * as categoriesActions from '../../../state/ducks/categoriesDuck'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { menu as dropDownMenu } from '../Navbar/NavbarDesktop'

const SubMenu = Menu.SubMenu

class NavbarMobile extends React.Component {
  state = {
    isOpen: false
  }

  toggleMenu = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  onCategorySelected = ({ key }) => {
    const categoryId = Number(key)
    this.props.categoriesActions.updateSelectedCategory(categoryId)
    this.setState({ isOpen: false })
  }

  render() {
    const { user, categories, selectedCategory, logout, goToProfile } = this.props

    return (
      <React.Fragment>
        <HamburgerMenu
          isOpen={this.state.isOpen}
          menuClicked={this.toggleMenu}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
        <MobileMenu isOpen={this.state.isOpen}>
          <div style={{ width: 260 }}>
            <Dropdown
              placement="bottomRight"
              overlay={dropDownMenu(logout, goToProfile)}
              trigger={['click']}
            >
              <AvatarWithUsername user={user} />
            </Dropdown>
            <AntMenu
              defaultSelectedKeys={[`${selectedCategory}`]}
              defaultOpenKeys={['categories']}
              mode="inline"
              onSelect={this.onCategorySelected}
            >
              <SubMenu key="categories" title={<span>Categories</span>}>
                <Category key={-1}>
                  <Dot />
                  <span>All</span>
                </Category>

                {categories.map(category => (
                  <Category key={category.id}>
                    <Dot color={category.color} />
                    <span>{category.name}</span>
                  </Category>
                ))}
              </SubMenu>
            </AntMenu>
          </div>
        </MobileMenu>
      </React.Fragment>
    )
  }
}

const AntMenu = styled(Menu)`
  height: fit-content;

  .ant-menu-submenu-title {
    pointer-events: none;

    .ant-menu-submenu-arrow {
      display: none;
    }
  }

  .ant-menu-item:hover {
    color: black;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: white;
    font-weight: bold;
    color: black;
  }

  .ant-menu-vertical .ant-menu-item:after,
  .ant-menu-vertical-left .ant-menu-item:after,
  .ant-menu-vertical-right .ant-menu-item:after,
  .ant-menu-inline .ant-menu-item:after {
    border-right: 1px solid black;
  }
`
AntMenu.displayName = 'AntMenu'

const Dot = styled.div`
  height: 8px;
  width: 8px;
  background-color: ${({ color }) => (color ? color : '#000')};
  border-radius: 50%;
  display: inline-block;
  margin-right: 16px;
`
Dot.displayName = 'Dot'

const Category = styled(Menu.Item)`
  display: flex;
  align-items: center;
`
Category.displayName = 'Category'

const mapState = state => ({
  categories: categoriesSelectors.getCategories(state),
  selectedCategory: categoriesSelectors.getSelectedCategory(state)
})

const mapDispatch = dispatch => ({
  categoriesActions: bindActionCreators(categoriesActions, dispatch)
})

export default connect(
  mapState,
  mapDispatch
)(NavbarMobile)
