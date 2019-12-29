import React from 'react'
import { Brand, Code, Gutter } from '../../src'

const BrandExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Brand> Hekin Sweet Brand </Brand>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Brand> Hekin Sweet Brand </Brand>

    </div>
  )
}

export default BrandExample
