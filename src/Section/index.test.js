import React from 'react'
import { mount } from 'enzyme'

import Section from './index.js'

describe('<Section />', () => {
  it('renders', () => {
    mount(<Section />)
  })

  it('accepts background && color prop', () => {
    const { background, color } = mount(
      <Section background='blue' color='red' />)
      .find('section').props().style
    expect(background).toEqual('blue')
    expect(color).toEqual('red')
  })
})
