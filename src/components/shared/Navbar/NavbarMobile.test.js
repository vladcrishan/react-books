import React from 'react'
import { shallow } from 'enzyme'
import NavbarMobile from './NavbarMobile'

const setup = props => {
  return shallow(<NavbarMobile {...props} />)
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
  categories: {
    items: [
      {
        id: 0,
        name: 'egovibut',
        color: '#e9e42e'
      },
      {
        id: 1,
        name: 'iwi',
        color: '#4a0035'
      },
      {
        id: 2,
        name: 'meruf',
        color: '#17768d'
      },
      {
        id: 3,
        name: 'titkab',
        color: '#7ab49f'
      },
      {
        id: 4,
        name: 'heplel',
        color: '#e8fa73'
      }
    ],
    selectedCategory: -1
  },
  logout: () => {},
  goToProfile: () => {}
}

describe('NavbarMobile component tests', () => {
  it('renders without crashing', () => {
    setup(props)
  })
})
