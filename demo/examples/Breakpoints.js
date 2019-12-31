import React from 'react'
import { Breakpoints, Code, Heading } from '../../src'

const BreakpointsExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Breakpoints />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Breakpoints />

    </div>
  )
}

export default BreakpointsExample
