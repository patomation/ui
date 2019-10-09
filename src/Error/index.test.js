import React from 'react'
import { mount } from 'enzyme'

import Error from './index.js'

describe('<Error />', () => {
  it('renders', () => {
    mount(<Error />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Error background="blue" color="red" />)
    expect(component.find('div.error').props().style.background).toEqual('blue')
    expect(component.find('div.error').props().style.color).toEqual('red')
  })
})
