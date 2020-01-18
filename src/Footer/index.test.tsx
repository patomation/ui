import * as React from 'react'
import { mount } from 'enzyme'

import Footer from './index'

describe('<Footer />', () => {
  it('renders', () => {
    mount(<Footer />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Footer background="blue" color="red" />)
    expect(component.find('footer').props().style.background).toEqual('blue')
    expect(component.find('footer').props().style.color).toEqual('red')
  })
})
