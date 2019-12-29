import React from 'react'
import { Gutter, Code } from '../../src'

const GutterExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Gutter />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Gutter />

    </div>
  )
}

export default GutterExample
