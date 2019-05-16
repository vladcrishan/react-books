import React from 'react'
import { shallow } from 'enzyme'
import { HomePage } from './HomePage'

const setup = props => {
  return shallow(<HomePage {...props} />)
}
const props = {
  categoriesActions: {
    getCategories: () => {
      return Promise.resolve()
    }
  }
}

describe('HomePage component tests', () => {
  it('renders without crashing', () => {
    setup(props)
  })

  it('renders correct information', () => {
    const wrapper = setup(props)
    expect(wrapper.find('Page').length).toBe(1)
    expect(wrapper.find('MediaQuery').length).toBe(1)
  })
})
