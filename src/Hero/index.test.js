import React from 'react'
import { mount } from 'enzyme'

import Hero from './index.js'

describe('<Hero />', () => {
  it('renders', () => {
    mount(<Hero />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Hero background="blue" color="red" />)
    expect(component.find('header.hero__background').props().style.background).toEqual('blue')
    expect(component.find('header.hero').props().style.color).toEqual('red')
  })
})
