import React from 'react'
import { mount } from 'enzyme'

import Input from './index.js'

describe('<Input />', () => {
  it('renders', () => {
    mount(<Input />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Input background="blue" color="red" />)
    expect(component.find('.input__input').props().style.background).toEqual('blue')
    expect(component.find('.input__input').props().style.color).toEqual('red')
  })
})
