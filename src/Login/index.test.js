import React from 'react'
import { mount } from 'enzyme'

import Login from './index.js'

describe('<Login />', () => {
  it('renders', () => {
    mount(<Login />)
  })

  // TODO
  // it('handles submit', () => {
  //   const handleSubmit = jest.fn()
  //   const component = mount(<Login />)
  //   // component.find('input[name="email"]').simulate('change', { target: { value: 'email@email.com' } })
  //   // component.find('input[name="password"]').simulate('change', { target: { value: 'passw0rd' } })
  //   component.find('input[name="email"]').instance().value = 'email@email.com'
  //   component.find('input[name="password"]').instance().value = 'passw0rd'
  //   component.find('button[type="submit"]').simulate('click')
  //   expect(handleSubmit).toBeCalled()
  // })

  it('accepts background && color prop', () => {
    const component = mount(<Login background="blue" color="red" />)
    expect(component.find('div.login').props().style.background).toEqual('blue')
    expect(component.find('div.login').props().style.color).toEqual('red')
  })
})
