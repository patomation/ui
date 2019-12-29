import React from 'react'
import { Shape, Code, Gutter } from '../../src'

const ShapeExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Shape />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Shape />

    </div>
  )
}

export default ShapeExample
