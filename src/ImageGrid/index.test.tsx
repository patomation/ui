import * as React from 'react'
import { mount } from 'enzyme'

import ImageGrid from './index'

describe('<ImageGrid />', () => {
  it('renders', () => {
    mount(<ImageGrid />)
  })

  it('renders with array of image urls', () => {
    mount(<ImageGrid images={['/testimage1.jpg', '/testimage2.jpg', '/testimage3.jpg']}/>)
  })

  it('renders with child images', () => {
    mount(
      <ImageGrid>
        <img src='/testimage1.jpg' />
        <img src='/testimage2.jpg' />
        <img src='/testimage3.jpg' />
      </ImageGrid>
    )
  })

  it('accepts background && color prop', () => {
    const component = mount(<ImageGrid background="blue" color="red" />)
    expect(component.find('div.imagegrid').props().style.background).toEqual('blue')
    expect(component.find('div.imagegrid').props().style.color).toEqual('red')
  })
})
