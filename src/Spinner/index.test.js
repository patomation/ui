import React from 'react'
import { mount } from 'enzyme'

import Spinner from './index.js'
import { Icon } from '../'

describe('<Spinner />', () => {
  it('renders', () => {
    mount(<Spinner />)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Spinner background="blue" color="red" />)
    expect(component.find(Icon).props().style.background).toEqual('blue')
    expect(component.find(Icon).props().style.color).toEqual('red')
  })
})
