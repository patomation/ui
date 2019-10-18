import React from 'react'
import { mount } from 'enzyme'

import LoginForm from './index.js'

describe('<LoginForm />', () => {
  it('renders', () => {
    mount(<LoginForm />)
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
    const component = mount(<LoginForm background="blue" color="red" />)
    expect(component.find('div.login-form').props().style.background).toEqual('blue')
    expect(component.find('div.login-form').props().style.color).toEqual('red')
  })
})
