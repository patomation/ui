import React from 'react'
import { mount } from 'enzyme'

import Panel from './index.js'
import { Hr } from '../'

describe('<Panel />', () => {
  it('renders', () => {
    mount(<Panel />)
  })

  it('renders with header', () => {
    const component = mount(<Panel header='test' />)
    expect(component.find('div.panel__header').text()).toEqual('test')
    expect(component.find(Hr).length).toEqual(1)
  })

  it('accepts padding prop', () => {
    const component = mount(<Panel padding='2rem' />)
    expect(component.find('div.panel__content').props().style.padding).toEqual('2rem')
  })
})
