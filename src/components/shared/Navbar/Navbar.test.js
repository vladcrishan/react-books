import React from 'react'
import { shallow } from 'enzyme'
import Navbar from './Navbar'

const setup = props => {
  return shallow(<Navbar {...props} />)
}
const props = {
  user: {
    id: 1792854466756608,
    first_name: 'Leo',
    last_name: 'Piazzini',
    avatar: 'https://picsum.photos/g/200',
    role: 'Business Analyst',
    city: 'Timisoara',
    books_number: 9,
    return_date: '2019-03-16T13:37:09.985Z'
  },
  authActions: () => {
    return Promise.resolve
  },
  history: {
    push: () => {}
  }
}

describe('Navbar component tests', () => {
  it('renders without crashing', () => {
    setup(props)
  })
})
