import React from 'react'
import { mount } from 'enzyme'

import Carousel from './index.js'
import { IconButton } from '../'

describe('<Carousel />', () => {
  it('renders', () => {
    const component = mount(
      <Carousel arrows={true}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Carousel>
    )
    expect(component.find(IconButton).length).toEqual(2)
  })

  it('accepts background && color prop', () => {
    const component = mount(
      <Carousel background="blue" color="red">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Carousel>
    )
    expect(component.find('div.carousel').props().style.background).toEqual('blue')
    expect(component.find('div.carousel').props().style.color).toEqual('red')
  })

  it('doesnt break if a sting is the child', () => {
    const component = mount(<Carousel>{'test'}</Carousel>)
    expect(component).toEqual({})
  })
})
