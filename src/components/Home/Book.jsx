import React from 'react'
import styled, { css } from 'styled-components'
import { Modal, Button } from 'antd'

class Book extends React.PureComponent {
  state = { modalVisible: false }

  showModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  closeModal = () => {
    this.setState({
      modalVisible: false
    })
  }

  render() {
    const { modalVisible } = this.state
    const { book } = this.props

    return (
      <React.Fragment>
        <Card>
          <Header>
            <Category color={book.category.color}>{book.category.name}</Category>
            <Image src={book.thumbnail} />
          </Header>
          <Content>
            <Title>{book.title}</Title>
            <Description>{book.description}</Description>
            <Meta onClick={this.showModal}>Read More</Meta>
          </Content>
        </Card>

        <Modal
          title={book.title}
          visible={modalVisible}
          onCancel={this.closeModal}
          footer={[
            <Button key="back" onClick={this.closeModal}>
              close
            </Button>
          ]}
        >
          <Image contained src={book.thumbnail} />
          <p>{book.description}</p>
          <ModalCategory color={book.category.color}>{book.category.name}</ModalCategory>
        </Modal>
      </React.Fragment>
    )
  }
}

const Card = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border-radius: 0.625rem;
  box-shadow: 0 0 25px rgba(40, 47, 60, 0.05), 0 20px 25px rgba(40, 47, 60, 0.05),
    0 3px 4px rgba(40, 47, 60, 0.05);
`
Card.displayName = 'Card'

const Header = styled.div`
  position: relative;
`
Header.displayName = 'Header'

const Category = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 5px 30px;
  border-top-right-radius: 2rem;
  background-color: ${({ color }) => (color ? color : '#000')};
  color: #ffffff;
  text-align: center;
`
Category.displayName = 'Category'

const ModalCategory = styled.p`
  color: ${({ color }) => (color ? color : '#000')};
  font-weight: bold;
`
ModalCategory.displayName = 'ModalCategory'

const Title = styled.h2`
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
Title.displayName = 'Title'

const Description = styled.p`
  display: block;
  display: -webkit-box;
  margin: 0 auto;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #838f93;
  margin-bottom: 16px;
`
Description.displayName = 'Description'

const Meta = styled.p`
  display: block;
  display: -webkit-box;
  margin: 0 auto;
  -webkit-box-orient: vertical;
  color: #4286f4;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
Meta.displayName = 'Meta'

const Content = styled.div`
  padding: 10px 24px 38px 24px;
  flex: 1;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  align-self: baseline;
  max-height: 200px;
  margin: auto;
  ${({ contained }) =>
    contained &&
    css`
      object-fit: contain;
    `}
  background-color: #fafafa;
`
Image.displayName = 'Image'

export default Book
