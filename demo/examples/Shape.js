import React from 'react'
import { Shape, Code, Gutter, Heading } from '../../src'

const ShapeExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Shape />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Shape />

    </div>
  )
}

export default ShapeExample
