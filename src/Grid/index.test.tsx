import * as React from 'react'
import { mount } from 'enzyme'

import Grid from './index'

describe('<Grid />', () => {
  it('renders', () => {
    mount(<Grid />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Grid background="blue" color="red" />)
    expect(component.find('div.grid').props().style.background).toEqual('blue')
    expect(component.find('div.grid').props().style.color).toEqual('red')
  })
})
