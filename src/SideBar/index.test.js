import React from 'react'
import { mount } from 'enzyme'

import SideBar from './index.js'

describe('<SideBar />', () => {
  it('renders', () => {
    mount(<SideBar />)
  })

  it('acceps width prop', () => {
    const component = mount(<SideBar width='200px'/>)
    expect(component.find('menu').props().style.width).toEqual('200px')
  })

  it('acceps right prop', () => {
    const component = mount(<SideBar right={true}/>)
    expect(component.find('menu').props().style.right).toEqual(0)
  })
})
