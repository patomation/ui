import * as React from 'react'
import { mount } from 'enzyme'

import Icon from './index'

describe('<Icon />', () => {
  it('renders', () => {
    mount(<Icon />)
  })

  // Todo fix this
  // it('accepts background && color prop', () => {
  //   const component = mount(<Icon name='star' background="blue" color="red" />)
  //   expect(component.find('svg').props().style.backgroundColor).toEqual('blue')
  //   expect(component.find('svg').props().fill).toEqual('red')
  // })
})
