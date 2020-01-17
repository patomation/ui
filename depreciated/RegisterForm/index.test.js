import React from 'react'
import { mount } from 'enzyme'

import RegisterForm from './index.js'

describe('<RegisterForm />', () => {
  it('renders', () => {
    mount(<RegisterForm />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<RegisterForm background="blue" color="red" />)
    expect(component.find('div.register-form').props().style.background).toEqual('blue')
    expect(component.find('div.register-form').props().style.color).toEqual('red')
  })
})
