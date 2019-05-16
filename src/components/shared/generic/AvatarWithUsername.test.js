import React from 'react'
import { shallow } from 'enzyme'
import AvatarWithUsername from './AvatarWithUsername'

const props = {
  user: {
    id: 3114942045618176,
    first_name: 'Lou',
    last_name: 'Manetti',
    avatar: 'https://picsum.photos/g/200',
    role: 'Software Developer',
    city: 'Sibiu',
    books_number: 4,
    return_date: '2019-03-25T18:54:21.939Z'
  }
}

export const testAvatarWithUsernameRender = wrapper => {
  expect(wrapper.find('ProfileMenu').length).toBe(1)
  expect(wrapper.find('ProfileAvatar').length).toBe(1)
  expect(wrapper.find('ProfileAvatar').props().src).toBe(props.user.avatar)
  expect(wrapper.find('Username').length).toBe(1)
  expect(wrapper.find('Username').text()).toEqual(
    `${props.user.first_name} ${props.user.last_name}`
  )
}

describe('AvatarWithUsername component tests', () => {
  it('renders without crashing', () => {
    shallow(<AvatarWithUsername {...props} />)
  })

  it('renders correct information', () => {
    const wrapper = shallow(<AvatarWithUsername {...props} />)
    testAvatarWithUsernameRender(wrapper)
  })
})
