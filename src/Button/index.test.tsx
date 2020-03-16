import * as React from 'react'
import { mount } from 'enzyme'

import Button from './index'

describe('<Button />', (): void => {
  it('renders', (): void => {
    mount(<Button />)
  })

  it('hovers', (): void => {
    let hover = null
    let button = mount(<Button onHover={ (boolean: boolean): void => {
      hover = boolean
    }} />)
    button.simulate('mouseenter')
    expect(hover).toEqual(true)
    button.simulate('mouseleave')
    expect(hover).toEqual(false)
    // It does not callback if callback undefined
    button = mount(<Button onHover={undefined} />)
    button.simulate('mouseenter')
    expect(hover).toEqual(false)
    button.simulate('mouseleave')
    expect(hover).toEqual(false)
  })

  it('clicks', (): void => {
    let down = false
    let mouseDown = false
    let mouseUp = false

    const button = mount(<Button
      onDown={(): void => { down = true }}
      onUp={(): void => { down = false }}
      onMouseDown={(): void => { mouseDown = true }}
      onMouseUp={(): void => { mouseUp = true }} />)
    button.simulate('mousedown')
    expect(down).toEqual(true)
    expect(mouseDown).toEqual(true)
    button.simulate('mouseup')
    expect(down).toEqual(false)
    expect(mouseUp).toEqual(true)
  })

  it('touches but ignores mouse events', (): void => {
    let down = false

    const button = mount(<Button
      onDown={(): void => { down = true }}
      onUp={(): void => { down = false }}
      onTouchStart={jest.fn()}
      onTouchEnd={jest.fn()} />)
    button.simulate('touchstart')
    expect(down).toEqual(true)
    button.simulate('mousedown')
    expect(down).toEqual(true)
    button.simulate('mouseup')
    expect(down).toEqual(true)
    button.simulate('touchend')
    expect(down).toEqual(false)
  })

  it('touches and clicks with no error if no callback', (): void => {
    let down = false
    const button = mount(<Button onDown={(): void => { down = true }} onUp={(): void => { down = false }}/>)
    button.simulate('touchstart')
    expect(down).toEqual(true)
    button.simulate('touchend')
    expect(down).toEqual(false)
    button.simulate('mousedown')
    expect(down).toEqual(false) // for some reason
    button.simulate('mouseup')
    expect(down).toEqual(false)
  })

  it('accepts background && color prop', (): void => {
    const component = mount(<Button background="blue" color="red" />)
    expect(component.find('button').props().style.background).toEqual('blue')
    expect(component.find('button').props().style.color).toEqual('red')
  })

  it('renders enabled', (): void => {
    const component = mount(<Button enabled={true} enabledStyle={{ color: 'red' }} />)
    expect(component.find('button').props().style.color).toEqual('red')
    // expect(component.find('button').props().style.background).toEqual('#333')
  })

  it('renders disabled', (): void => {
    const component = mount(<Button disabled={true} disabledStyle={{ color: 'red' }} />)
    expect(component.find('button').props().style.color).toEqual('red')
    // expect(component.find('button').props().style.background).toEqual('gray')
    expect(component.find('button').props().style.cursor).toEqual('auto')
  })

  it('mouse Enters and Leaves', (): void => {
    let mouseEnter = false
    let mouseLeft = false
    const component = mount(<Button
      onMouseEnter={(): void => {
        mouseEnter = true
      }}
      onMouseLeave={(): void => {
        mouseLeft = true
      }} />)
    component.simulate('mouseenter')
    expect(mouseEnter).toEqual(true)
    component.simulate('mouseleave')
    expect(mouseLeft).toEqual(true)
  })
})
