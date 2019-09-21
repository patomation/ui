import React from 'react'
import { mount } from 'enzyme'

import NavItem from './index.js'

describe('<NavItem />', () => {
  it('renders', () => {
    mount(<NavItem />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<NavItem background="blue" color="red" />)
    expect(component.find('a').props().style.background).toEqual('blue')
    expect(component.find('a').props().style.color).toEqual('red')
  })
})
