import React from 'react'
import { Breakpoints, Code, Gutter } from '../../src'

const BreakpointsExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Breakpoints />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Breakpoints />

    </div>
  )
}

export default BreakpointsExample
