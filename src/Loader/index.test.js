import React from 'react'
import ReactDOM from 'react-dom'
/**
* How act() works
* https://reactjs.org/docs/test-utils.html#act
**/
import { act } from 'react-dom/test-utils'

import Loader from './index.js'

let container

const handleComplete = jest.fn()

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

describe('<Loader />', () => {
  it('renders', () => {
    act(() => {
      jest.useFakeTimers()
      ReactDOM.render(<Loader onComplete={handleComplete} progressBar={true} progressBarTime={50}/>, container)
      jest.runAllTimers()
    })
    expect(handleComplete).toBeCalled()
  })
})
