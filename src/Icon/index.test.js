import React from 'react'
import { mount } from 'enzyme'

import Icon from './index.js'

describe('<Icon />', () => {
  it('renders', () => {
    mount(<Icon />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Icon name='star' background="blue" color="red" />)
    expect(component.find('svg').props().style.backgroundColor).toEqual('blue')
    expect(component.find('svg').props().fill).toEqual('red')
  })
})
