import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from './LoginPage'

const setup = props => {
  return shallow(<LoginPage {...props} />)
}
const props = {
  authActions: {
    login: () => {
      return Promise.resolve()
    }
  }
}

describe('LoginPage component tests', () => {
  it('renders without crashing', () => {
    setup(props)
  })

  it('renders correct information', () => {
    const wrapper = setup(props)
    expect(wrapper.find('Page').length).toBe(1)
    expect(wrapper.find('Container').length).toBe(1)
    expect(wrapper.find('h1').length).toBe(1)
    expect(wrapper.find('h1').text()).toEqual('Ready to read some books?')
    expect(wrapper.find('Button').length).toBe(1)
  })
})
