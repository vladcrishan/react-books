import React from 'react'
import { shallow } from 'enzyme'
import { ProfilePage } from './ProfilePage'

const setup = props => {
  return shallow(<ProfilePage {...props} />)
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
  }
}

describe('ProfilePage component tests', () => {
  it('renders without crashing', () => {
    setup(props)
  })

  it('renders correct information', () => {
    const wrapper = setup(props)
    expect(wrapper.find('ProfileAvatar').length).toBe(1)
    expect(wrapper.find('Name').length).toBe(1)
    expect(wrapper.find('Name').text()).toEqual(`${props.user.first_name} ${props.user.last_name}`)
    expect(wrapper.find('h3').length).toBe(1)
    expect(wrapper.find('h3').text()).toEqual(props.user.role)
    expect(wrapper.find('Divider').length).toBe(1)
    expect(wrapper.find('p').length).toBe(3)
    // expect(
    //   wrapper
    //     .find('h3')
    //     .get(0)
    //     .text()
    // ).toEqual(`City: ${props.user.city}`)
    // expect(
    //   wrapper
    //     .find('h3')
    //     .get(1)
    //     .text()
    // ).toEqual(`Books: ${props.user.books_number}`)
    // expect(
    //   wrapper
    //     .find('h3')
    //     .at(w)
    //     .text()
    // ).toEqual(`Return Date: ${props.user.return_date}`)
  })
})
