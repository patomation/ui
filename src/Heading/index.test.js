import React from 'react'
import { mount } from 'enzyme'

import Heading from './index.js'

describe('<Heading />', () => {
  it('renders', () => {
    mount(<Heading Tag='h1' />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Heading Tag='h1' background="blue" color="red" />)
    expect(component.find('h1').props().style.background).toEqual('blue')
    expect(component.find('h1').props().style.color).toEqual('red')
  })
})
