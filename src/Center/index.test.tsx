import * as React from 'react'
import { mount } from 'enzyme'

import Center from './index'

describe('<Center />', () => {
  it('renders', () => {
    mount(<Center />)
  })

  it('accepts width', () => {
    const component = mount(<Center width="50%" />)
    expect(component.find('div.center__content').props().style.width).toEqual('50%')
  })

  it('accepts background && color prop', () => {
    const component = mount(<Center background="blue" color="red" />)
    expect(component.find('div.center').props().style.background).toEqual('blue')
    expect(component.find('div.center').props().style.color).toEqual('red')
  })
})
