import * as React from 'react'
import { mount } from 'enzyme'

import Button from './index'

describe('<Button />', () => {
  it('renders', () => {
    mount(<Button />)
  })

  it('hovers', () => {
    let hover = null
    let button = mount(<Button onHover={ boolean => {
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

  it('clicks', () => {
    let down = false
    let mouseDown = false
    let mouseUp = false

    const button = mount(<Button
      onDown={() => { down = true }}
      onUp={() => { down = false }}
      onMouseDown={() => { mouseDown = true }}
      onMouseUp={() => { mouseUp = true }} />)
    button.simulate('mousedown')
    expect(down).toEqual(true)
    expect(mouseDown).toEqual(true)
    button.simulate('mouseup')
    expect(down).toEqual(false)
    expect(mouseUp).toEqual(true)
  })

  it('touches but ignores mouse events', () => {
    let down = false

    const button = mount(<Button
      onDown={() => { down = true }}
      onUp={() => { down = false }}
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

  it('touches and clicks with no error if no callback', () => {
    let down = false
    const button = mount(<Button onDown={() => { down = true }} onUp={() => { down = false }}/>)
    button.simulate('touchstart')
    expect(down).toEqual(true)
    button.simulate('touchend')
    expect(down).toEqual(false)
    button.simulate('mousedown')
    expect(down).toEqual(false) // for some reason
    button.simulate('mouseup')
    expect(down).toEqual(false)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Button background="blue" color="red" />)
    expect(component.find('button').props().style.background).toEqual('blue')
    expect(component.find('button').props().style.color).toEqual('red')
  })

  it('renders enabled', () => {
    const component = mount(<Button enabled={true} enabledStyle={{ color: 'red' }} />)
    expect(component.find('button').props().style.color).toEqual('red')
    expect(component.find('button').props().style.background).toEqual('#40e0d0')
  })

  it('renders disabled', () => {
    const component = mount(<Button disabled={true} disabledStyle={{ color: 'red' }} />)
    expect(component.find('button').props().style.color).toEqual('red')
    expect(component.find('button').props().style.background).toEqual('gray')
    expect(component.find('button').props().style.cursor).toEqual('auto')
  })

  it('centers', () => {
    const component = mount(<Button center={true} />)
    expect(component.find('div').props().style.textAlign).toEqual('center')
  })

  it('renders outlined', () => {
    const component = mount(<Button kind={'outline'} color='green' />)
    expect(component.find('button').props().style.border).toEqual('1px solid green')
  })

  it('mouse Enters and Leaves', () => {
    let mouseEnter = false
    let mouseLeft = false
    const component = mount(<Button
      onMouseEnter={() => {
        mouseEnter = true
      }}
      onMouseLeave={() => {
        mouseLeft = true
      }} />)
    component.simulate('mouseenter')
    expect(mouseEnter).toEqual(true)
    component.simulate('mouseleave')
    expect(mouseLeft).toEqual(true)
  })
})
