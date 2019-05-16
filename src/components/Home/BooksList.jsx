import React from 'react'
import * as booksActions from '../../state/ducks/booksDuck'
import * as booksSelectors from '../../state/selectors/booksSelectors'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import Book from './Book'
import emptyImage from '../../assets/no-books.png'

export class BooksList extends React.Component {
  async componentWillMount() {
    try {
      await this.props.booksActions.getBooks()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { books } = this.props

    if (!books.length)
      return (
        <Container>
          <EmptyContainer>
            <Image src={emptyImage} />
            <EmptyTitle>It seems like there are no books :(</EmptyTitle>
          </EmptyContainer>
        </Container>
      )

    return (
      <Container>
        <AntRow gutter={24}>
          {books.map(book => (
            <AntCol key={book.id} sm={24} md={12}>
              <Book book={book} />
            </AntCol>
          ))}
        </AntRow>
      </Container>
    )
  }
}

const Image = styled.img`
  width: 300px;
  height: auto;
`
Image.displayName = 'Image'

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
EmptyContainer.displayName = 'EmptyContainer'

const EmptyTitle = styled.h2`
  color: #838f93;
`
EmptyTitle.displayName = 'EmptyTitle'

const Container = styled.div`
  flex: 1;
  padding: 0 30px;
`
Container.displayName = 'Container'

const AntRow = styled(Row)`
  margin: -24px 0;
`
AntRow.displayName = 'AntRow'

const AntCol = styled(Col)`
  padding: 24px 12px;
`
AntCol.displayName = 'AntCol'

const mapState = state => ({
  books: booksSelectors.getBooksByCategorySelected(state)
})

const mapDispatch = dispatch => ({
  booksActions: bindActionCreators(booksActions, dispatch)
})

export default connect(
  mapState,
  mapDispatch
)(BooksList)
