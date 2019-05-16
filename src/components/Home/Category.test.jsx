import React from 'react'
import { shallow, mount } from 'enzyme'
import Category from './Category'

const props = {
  category: {
    id: 1,
    name: 'iwi',
    color: '#4a0035'
  }
}

const testComponentNOEditMode = wrapper => {
  expect(wrapper.find('Name').length).toBe(1)
  expect(wrapper.find('Name').text()).toEqual(props.category.name)
  expect(wrapper.find('Actions').length).toBe(1)
  expect(wrapper.find('IconContainer').length).toBe(1)
  expect(wrapper.find('Icon').length).toBe(1)
}

const testComponentEditMode = wrapper => {
  expect(wrapper.find('Input').length).toBe(1)
  expect(wrapper.find('Input').props().value).toBe(props.category.name)
  expect(wrapper.find('SmallButton').length).toBe(1)
  expect(wrapper.find('SmallButton').text()).toEqual('save')
}

describe('Category component tests', () => {
  it('renders without crashing', () => {
    shallow(<Category {...props} />)
  })

  it('renders correct information in NO edit mode', () => {
    const wrapper = shallow(<Category {...props} />)
    wrapper.setState({
      isEditing: false,
      initialValue: props.category.name
    })
    testComponentNOEditMode(wrapper)
  })

  it('renders correct information in edit mode', () => {
    const wrapper = shallow(<Category {...props} />)
    wrapper.setState({
      isEditing: true,
      initialValue: props.category.name
    })
    testComponentEditMode(wrapper)
  })

  it('renders correct edit button click', () => {
    const wrapper = shallow(<Category {...props} />)
    wrapper.setState({
      isEditing: false,
      initialValue: props.category.name
    })
    testComponentNOEditMode(wrapper)
    const mockedEvent = {
      stopPropagation: () => {}
    }
    wrapper.find('IconContainer').simulate('click', mockedEvent)
    expect(wrapper.state('isEditing')).toBe(true)
    testComponentEditMode(wrapper)
  })

  it('renders correct save button click', () => {
    const wrapper = shallow(<Category {...props} />)
    wrapper.setState({
      isEditing: true,
      initialValue: props.category.name
    })
    testComponentEditMode(wrapper)
    wrapper.find('SmallButton').simulate('click')
    expect(wrapper.state('isEditing')).toBe(false)
    testComponentNOEditMode(wrapper)
  })
})
