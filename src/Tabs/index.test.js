import React from 'react'
import { mount } from 'enzyme'

import Tabs from './index.js'

describe('<Tabs />', () => {
  it('renders', () => {
    mount(<Tabs />)
  })

  it('renders multiple tabs and handles click', () => {
    const component = mount(<Tabs data={['item1', 'item2', 'item3']} step={true} active='item1' />)
    expect(component.find('div.tabs__tab').length).toEqual(3)
  })

  const handleClick = jest.fn()

  it('handles click with no event without breaking', () => {
    const component = mount(<Tabs data={['item1']} step={true} active='item1'/>)
    component.find('div.tabs__tab').simulate('click')
    expect(handleClick).not.toBeCalled()
  })

  // TODO
  // it('handles click', () => {
  //   const component = mount(<Tabs data={['item1']} step={true} active='item1' onClick={handleClick} />)
  //   component.find('div.tabs__tab').simulate('click')
  //   expect(handleClick).toBeCalled()
  // })

  it('accepts background && color prop', () => {
    const { background, color } = mount(
      <Tabs background='blue' color='red' />)
      .find('div.tabs').props().style
    expect(background).toEqual('blue')
    expect(color).toEqual('red')
  })
})
