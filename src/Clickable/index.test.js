import React from 'react'
import { mount } from 'enzyme'

import Clickable from './index.js'

describe('<Clickable />', () => {
  it('renders', () => {
    mount(<Clickable />)
  })

  const handleClick = jest.fn()

  it('clicks without breaking', () => {
    const component = mount(<Clickable onClick={handleClick} />)
    component.simulate('click')
    expect(handleClick).toBeCalled()
  })

  it('disables', () => {
    const component = mount(<Clickable disabled={true} />)
    expect(component.find('div.clickable').props().style.cursor).toEqual('default')
    component.simulate('click')
    expect(handleClick).not.toBeCalled()
  })

  it('accepts background && color prop', () => {
    const { background, color } = mount(
      <Clickable background="blue" color="red" />)
      .find('div.clickable').props().style
    expect(background).toEqual('blue')
    expect(color).toEqual('red')
  })
})
