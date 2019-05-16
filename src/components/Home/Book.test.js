import React from 'react'
import { shallow } from 'enzyme'
import Book from './Book'

const setup = props => {
  return shallow(<Book {...props} />)
}
const props = {
  book: {
    id: '1',
    thumbnail: 'https://picsum.photos/200',
    title: 'hapciu',
    description: 'sneeze',
    category: {
      id: '11',
      name: 'blabla',
      color: 'black'
    }
  }
}

export const testCardDisplaysCorrectInformation = wrapper => {
  expect(wrapper.find('Category').props().color).toBe(props.book.category.color)
  expect(wrapper.find('Category').text()).toEqual(props.book.category.name)
  expect(
    wrapper
      .find('Image')
      .first()
      .props().src
  ).toBe(props.book.thumbnail)
  expect(wrapper.find('Title').text()).toEqual(props.book.title)
  expect(wrapper.find('Description').text()).toEqual(props.book.description)
}

describe('Book component tests', () => {
  it('renders without crashing', () => {
    setup(props)
  })

  it('renders Card element', () => {
    const wrapper = setup(props)
    expect(wrapper.find('Card').length).toBe(1)
  })

  it('renders Modal element', () => {
    const wrapper = setup(props)
    expect(wrapper.find('Modal').length).toBe(1)
  })

  it('card displays correct information', () => {
    const wrapper = setup(props)
    testCardDisplaysCorrectInformation(wrapper)
  })

  it('modal displays correct information', () => {
    const wrapper = setup(props)
    expect(wrapper.find('Modal').props().title).toBe(props.book.title)
    expect(
      wrapper
        .find('Image')
        .last()
        .props().src
    ).toBe(props.book.thumbnail)

    // Problem with targeting modal content
    // expect(wrapper.find('p').text()).toEqual(props.book.description
    // expect(wrapper.find('ModalCategory').props().color).toBe(props.book.category.color)
    // expect(wrapper.find('ModalCategory').text()).toEqual(props.book.category.name)
  })

  it('modal visible on click', () => {
    const wrapper = setup(props)
    expect(wrapper.state('modalVisible')).toBe(false)
    wrapper.find('Meta').simulate('click')
    expect(wrapper.state('modalVisible')).toBe(true)
    expect(wrapper.find('Modal').props().visible).toBe(true)
  })
})
