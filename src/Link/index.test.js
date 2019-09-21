import React from 'react'
import { mount } from 'enzyme'

import Link from './index.js'

describe('<Link />', () => {

  it("renders", () => {
    mount(<Link />)
  })

  it("hovers", () => {
    let hover = null
    let component = mount(<Link onHover={ boolean =>{
      hover = boolean
    }} />)
    component.simulate('mouseenter')
    expect(hover).toEqual(true)
    component.simulate('mouseleave')
    expect(hover).toEqual(false)
    //It does't callback if callback undefined
    component = mount(<Link onHover={undefined} />)
    component.simulate('mouseenter')
    expect(hover).toEqual(false)
    component.simulate('mouseleave')
    expect(hover).toEqual(false)

  })

  it("accepts background && color prop", () => {
    const component = mount(<Link background="blue" color="red" />)
    expect(component.find('a').props().style.background).toEqual('blue')
    expect(component.find('a').props().style.color).toEqual('red')
  })

})
