import React from 'react'
import { mount } from 'enzyme'


import SideBarItem from './index.js'

describe('<SideBarItem />', () => {

  it("renders", () => {
    mount(<SideBarItem />)
  })

  it("hovers", () => {
    let hover = null
    let component = mount(<SideBarItem onHover={ boolean =>{
      hover = boolean
    }} />)
    component.simulate('mouseenter')
    expect(hover).toEqual(true)
    component.simulate('mouseleave')
    expect(hover).toEqual(false)
    //It does't callback if callback undefined
    component = mount(<SideBarItem onHover={undefined} />)
    component.simulate('mouseenter')
    expect(hover).toEqual(false)
    component.simulate('mouseleave')
    expect(hover).toEqual(false)

  })
  //TODO we will have to see about implementing this better:
  // it("accepts background && color prop", () => {
  //   const component = mount(<SideBarItem background="blue" color="red" />)
  //   expect(component.find('button').props().style.background).toEqual('blue')
  //   expect(component.find('button').props().style.color).toEqual('red')
  // })

})
