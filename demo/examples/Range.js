import React from 'react'
import { Range, Code, Heading } from '../../src'

const RangeExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Range />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Range />

    </div>
  )
}

export default RangeExample
