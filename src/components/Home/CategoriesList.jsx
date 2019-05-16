import React from 'react'
import { Menu } from 'antd'
import styled from 'styled-components'
import * as categoriesSelectors from '../../state/selectors/categoriesSelectors'
import * as categoriesActions from '../../state/ducks/categoriesDuck'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Category, { Dot } from './Category'

const SubMenu = Menu.SubMenu

export class CategoriesList extends React.Component {
  async componentWillMount() {
    try {
      await this.props.categoriesActions.getCategories()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { categories, selectedCategory } = this.props

    return (
      <AntMenu
        style={{ width: 256 }}
        defaultSelectedKeys={[`${selectedCategory}`]}
        defaultOpenKeys={['categories']}
        mode="inline"
        onSelect={this.onCategorySelected}
      >
        <SubMenu key="categories" title={<span>Categories</span>}>
          <MenuItem key={-1}>
            <Dot />
            <span>All</span>
          </MenuItem>

          {categories.map(category => (
            <MenuItem key={category.id}>
              <Category category={category} updateCategory={this.updateCategory} />
            </MenuItem>
          ))}
        </SubMenu>
      </AntMenu>
    )
  }

  updateCategory = category => {
    this.props.categoriesActions.updateCategory(category)
  }

  onCategorySelected = ({ key }) => {
    const categoryId = Number(key)
    this.props.categoriesActions.updateSelectedCategory(categoryId)
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

const MenuItem = styled(Menu.Item)`
  display: flex;
  align-items: center;
`
MenuItem.displayName = 'MenuItem'

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
)(CategoriesList)
