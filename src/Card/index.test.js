import React from 'react'
import { mount } from 'enzyme'

import Card from './index.js'

describe('<Card />', () => {
  it('renders', () => {
    mount(<Card />)
  })

  it('renders children as middle content', () => {
    const component = mount(<Card>{'test'}</Card>)
    expect(component.find('div.card__footer').text()).toEqual('test')
  })

  it('accepts background && color prop', () => {
    const component = mount(<Card background="blue" color="red" />)
    expect(component.find('div.panel').props().style.background).toEqual('blue')
    expect(component.find('div.panel').props().style.color).toEqual('red')
  })
})
