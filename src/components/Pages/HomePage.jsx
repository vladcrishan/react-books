import React from 'react'
import { BooksList, CategoriesList } from '../Home'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import * as categoriesActions from '../../state/ducks/categoriesDuck'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class HomePage extends React.Component {
  async componentWillMount() {
    try {
      await this.props.categoriesActions.getCategories()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Page>
        <MediaQuery minWidth={700}>
          <CategoriesList />
        </MediaQuery>
        <BooksList />
      </Page>
    )
  }
}

const Page = styled.div`
  display: flex;
  margin-top: 60px;
`
Page.displayName = 'Page'

const mapDispatch = dispatch => ({
  categoriesActions: bindActionCreators(categoriesActions, dispatch)
})

export default connect(
  null,
  mapDispatch
)(HomePage)
