import * as React from 'react'
import { mount } from 'enzyme'

import Shape from './index'

describe('<Shape />', () => {
  it('renders', () => {
    mount(<Shape />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Shape background="blue" color="red" />)
    expect(component.find('div.shape__shape').props().style.background).toEqual('blue')
    expect(component.find('div.shape__shape').props().style.color).toEqual('red')
  })
})
