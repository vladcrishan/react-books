import React from 'react'
import styled from 'styled-components'
import { Icon, Input, Button } from 'antd'
import { message } from 'antd'

class Category extends React.PureComponent {
  state = {
    isEditing: false,
    initialValue: this.props.category.name
  }

  render() {
    const { category } = this.props

    return (
      <Container onClick={this.handleContainerClicked}>
        <Dot color={category.color} />
        <Name>
          {this.state.isEditing ? (
            <Input
              onKeyPress={this.handleKeyPress}
              onChange={this.handleInputChange}
              value={category.name}
            />
          ) : (
            category.name
          )}
        </Name>
        {this.state.isEditing ? (
          <SmallButton type="primary" onClick={this.onSave}>
            save
          </SmallButton>
        ) : (
          <Actions>
            <IconContainer onClick={this.enableEditing}>
              <Icon type="edit" />
            </IconContainer>
          </Actions>
        )}
      </Container>
    )
  }

  handleContainerClicked = event => {
    this.state.isEditing && event.stopPropagation()
  }

  onSave = () => {
    if (!this.props.category.name) {
      message.error('Category can not be saved empty')
      const newCategory = {
        ...this.props.category,
        name: this.state.initialValue
      }

      this.props.updateCategory(newCategory)
    }

    this.setState({
      isEditing: false,
      initialValue: this.props.category.name
    })
  }

  enableEditing = event => {
    this.setState({ isEditing: true })
    event.stopPropagation()
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.onSave()
    }
  }

  handleInputChange = event => {
    const { value } = event.target

    const newCategory = {
      ...this.props.category,
      name: value
    }

    this.props.updateCategory(newCategory)
  }
}

const Container = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
`
Container.displayName = 'Container'

const Name = styled.div`
  flex: 1;
`
Name.displayName = 'Name'

const IconContainer = styled.div`
  padding-left: 10px;
`
IconContainer.displayName = 'IconContainer'

const Actions = styled.span`
  margin-left: 20px;
`
Actions.displayName = 'Actions'

export const Dot = styled.div`
  height: 8px;
  width: 8px;
  background-color: ${({ color }) => (color ? color : '#000')};
  border-radius: 50%;
  display: inline-block;
  margin-right: 16px;
`
Dot.displayName = 'Dot'

const SmallButton = styled(Button).attrs(() => ({
  size: 'small'
}))`
  margin-left: 8px;
`
SmallButton.displayName = 'SmallButton'

export default Category
