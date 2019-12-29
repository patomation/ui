import React from 'react'
import { Collapse, Code, Gutter } from '../../src'

const CollapseExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Collapse />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Collapse />

    </div>
  )
}

export default CollapseExample
