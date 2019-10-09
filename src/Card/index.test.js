import React from 'react'
import { mount } from 'enzyme'

import Card from './index.js'

describe('<Card />', () => {
  it('renders', () => {
    mount(<Card />)
  })

  it('renders children as middle content', () => {
    const component = mount(<Card>{'test'}</Card>)
    expect(component.find('div.card__middle').text()).toEqual('test')
  })

  it('renders with middle content', () => {
    const component = mount(<Card middle='test'/>)
    expect(component.find('div.card__middle').text()).toEqual('test')
  })

  it('renders with bottom content', () => {
    const component = mount(<Card bottom='test'/>)
    expect(component.find('div.card__bottom').text()).toEqual('test')
  })

  it('accepts background && color prop', () => {
    const component = mount(<Card background="blue" color="red" />)
    expect(component.find('div.card').props().style.background).toEqual('blue')
    expect(component.find('div.card').props().style.color).toEqual('red')
  })
})
