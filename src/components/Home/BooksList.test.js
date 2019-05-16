import React from 'react'
import { shallow, mount } from 'enzyme'
import { BooksList } from './BooksList'
import { testCardDisplaysCorrectInformation } from '../Home/Book.test'

const setup = (render, props) => {
  return render(<BooksList {...props} />)
}
const props = {
  books: [
    {
      id: 1260232195964928,
      thumbnail: 'https://picsum.photos/200',
      title: 'Robinson Crusoe',
      description: 'The Farther Adventures of Robinson Crusoe is a novel by Daniel Defoe...',
      categoryId: 4,
      category: {
        id: 4,
        name: 'heplel',
        color: '#e8fa73'
      }
    },
    {
      id: 8532803245309952,
      thumbnail: 'https://picsum.photos/200',
      title: 'White Fang',
      description: 'White Fang is a novel by American author Jack London...',
      categoryId: 1,
      category: {
        id: 1,
        name: 'iwi',
        color: '#4a0035'
      }
    }
  ],
  booksActions: {
    getBooks: () => {
      return Promise.resolve()
    }
  }
}

describe('BooksList component tests', () => {
  it('renders without crashing', () => {
    setup(shallow, props)
  })

  it('renders correct information if NO books', () => {
    const wrapper = setup(shallow, {
      books: {},
      booksActions: {
        getBooks: () => {
          return Promise.resolve()
        }
      }
    })
    expect(wrapper.find('Container').length).toBe(1)
    expect(wrapper.find('EmptyContainer').length).toBe(1)
    expect(wrapper.find('Image').length).toBe(1)
    expect(wrapper.find('EmptyTitle').length).toBe(1)
    expect(wrapper.find('EmptyTitle').text()).toEqual('It seems like there are no books :(')
  })

  it('renders correct information if books', () => {
    const wrapper = setup(mount, props)
    expect(wrapper.find('Container').length).toBe(1)
    expect(wrapper.find('AntRow').length).toBe(1)
    // testCardDisplaysCorrectInformation(wrapper)
  })
})
