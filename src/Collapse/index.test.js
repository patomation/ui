import React from 'react'
import { mount } from 'enzyme'

import Collapse from './index.js'

describe('<Collapse />', () => {
  it('renders', () => {
    mount(<Collapse />)
  })

// Todo
  // it('collapses', () => {
  //   const handleComplete = jest.fn()
  //   const component = mount(<Collapse collapse={false} speed={0} onComplete={handleComplete} >{'test'}</Collapse>)
  //   setTimeout((done) => {
  //     component.setProps({ collapse: true })
  //     expect(component.props().collapse).toEqual(true)
  //     expect(handleComplete).toBeCalled()
  //     done()
  //   }, 200)
  // })
})
