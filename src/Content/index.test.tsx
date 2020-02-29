import * as React from 'react'
import { mount } from 'enzyme'

import Content from './index'

describe('<Content />', () => {
  it('renders', () => {
    mount(<Content />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Content background="blue" color="red" />)
    expect(component.find('main').props().style.background).toEqual('blue')
    expect(component.find('main').props().style.color).toEqual('red')
  })
})
