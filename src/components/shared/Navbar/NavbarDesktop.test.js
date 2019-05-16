import React from 'react'
import { shallow, mount } from 'enzyme'
import NavbarDesktop from './NavbarDesktop'
import { testAvatarWithUsernameRender } from '../generic/AvatarWithUsername.test'

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
  },
  logout: () => {},
  goToProfile: () => {}
}

describe('NavbarDesktop component tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NavbarDesktop {...props} />)
    expect(wrapper.find('Dropdown').length).toBe(1)
  })

  it('shallow renders without crashing', () => {
    const wrapper = shallow(<NavbarDesktop {...props} />)
    expect(wrapper.find('Dropdown').length).toBe(1)
  })

  it('mount renders without crashing', () => {
    const wrapper = mount(<NavbarDesktop {...props} />)
    testAvatarWithUsernameRender(wrapper)
  })
})
