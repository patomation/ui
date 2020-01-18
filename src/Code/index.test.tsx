import * as React from 'react'
import { mount } from 'enzyme'

import Code from './index'

describe('<Code />', () => {
  it('renders', () => {
    mount(<Code />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Code background="blue" color="red" />)
    expect(component.find('div').props().style.background).toEqual('blue')
    expect(component.find('div').props().style.color).toEqual('red')
  })
})
