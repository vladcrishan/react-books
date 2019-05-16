import React from 'react'
import { shallow, mount } from 'enzyme'
import { CategoriesList } from './CategoriesList'

const setup = () => {
  return shallow(<CategoriesList {...props} />)
}
const props = {
  categories: [
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
  selectedCategory: -1,
  categoriesActions: {
    getCategories: () => {
      return Promise.resolve()
    }
  }
}

describe('CategoriesList component tests', () => {
  it('renders without crashing', () => {
    setup()
  })
  it('renders correct information', () => {
    const wrapper = setup()
    expect(wrapper.find('AntMenu').length).toBe(1)
    expect(wrapper.find('SubMenu').length).toBe(1)
  })
})
