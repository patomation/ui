import * as React from 'react'
import { mount } from 'enzyme'

import Brand from './index'

describe('<Brand />', () => {
  it('renders', () => {
    mount(<Brand />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Brand background="blue" color="red" />)
    expect(component.find('span.brand').props().style.background).toEqual('blue')
    expect(component.find('span.brand').props().style.color).toEqual('red')
  })
})
