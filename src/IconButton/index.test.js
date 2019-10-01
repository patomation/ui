import React from 'react'
import { mount } from 'enzyme'

import IconButton from './index.js'

describe('<IconButton />', () => {
  it('renders', () => {
    mount(<IconButton />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<IconButton background="blue" color="red" />)
    expect(component.find('button').props().style.background).toEqual('blue')
    expect(component.find('button').props().style.color).toEqual('red')
  })
})
