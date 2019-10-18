import React from 'react'
import { mount } from 'enzyme'

import Hr from './index.js'

describe('<Hr />', () => {
  it('renders', () => {
    mount(<Hr />)
  })

  it('accepts color prop', () => {
    const component = mount(<Hr color="red" />)
    expect(component.find('hr').props().style.border).toEqual('1px solid red')
  })

  it('accepts opacity prop', () => {
    const component = mount(<Hr opacity={0.5} />)
    expect(component.find('hr').props().style.opacity).toEqual(0.5)
  })
})
