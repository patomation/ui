import * as React from 'react'
import { mount, shallow } from 'enzyme'

import Badge from './index'
import { Star } from '../icons'

describe('<Badge />', () => {
  it('renders', () => {
    mount(<Badge />)
  })

  it('renders as label when characters are more than 1', () => {
    const component = mount(<Badge>{'999'}</Badge>)
    expect(component.find('div.badge__shape-for-label').text()).toEqual('999')
  })

  it('renders as small circle no children', () => {
    const component = mount(<Badge/>)
    expect(component.find('div.badge__shape').text()).toEqual('')
  })

  it('renders as circle and icon', () => {
    const component = shallow(<Badge icon={<Star/>}/>)
    // expect(component.find('.icon').props().name).toEqual('star')
    expect(component.find(Star)).toHaveLength(1)
  })

  it('renders as circle when 1 character', () => {
    const component = mount(<Badge>{'1'}</Badge>)
    expect(component.find('div.badge__shape').text()).toEqual('1')
  })

  it('accepts background && color prop', () => {
    const { background, color } = mount(
      <Badge background='blue' color='red' />)
      .find('div.badge').props().style
    expect(background).toEqual('blue')
    expect(color).toEqual('red')
  })

  it('has style', () => {
    const component = mount(<Badge />)
    expect(component.find('.badge').props().style.width).toEqual('1px')
    expect(component.find('.badge').props().style.width).toEqual('1px')
  })
})
