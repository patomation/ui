import React from 'react'
import { mount } from 'enzyme'

import Modal from './index.js'

describe('<Modal />', () => {
  it('renders', () => {
    mount(<Modal />)
  })

  it('does not break if onClose is null', () => {
    const handleClose = jest.fn()
    const component = mount(<Modal show={true}>{'test'}</Modal>)
    component.find('button.modal__close').simulate('click')
    expect(handleClose).not.toBeCalled()
  })

  it('closes when close button clicked', () => {
    const handleClose = jest.fn()
    const component = mount(<Modal show={true} onClose={handleClose} >{'test'}</Modal>)
    component.find('button.modal__close').simulate('click')
    expect(handleClose).toBeCalled()
  })

  it('accepts background && color prop', () => {
    const component = mount(<Modal show={true} background="blue" color="red" />)
    expect(component.find('div.modal').props().style.background).toEqual('blue')
    expect(component.find('div.modal').props().style.color).toEqual('red')
  })
})
