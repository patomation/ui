import * as React from 'react'
import { mount } from 'enzyme'

import Spinner from './index'
import { Sync } from '../icons/index'

describe('<Spinner />', () => {
  it('renders', () => {
    mount(<Spinner />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Spinner background="blue" color="red" />)
    expect(component.find(Sync).props().style.background).toEqual('blue')
    expect(component.find(Sync).find('svg').prop('fill')).toEqual('red')
  })
})
