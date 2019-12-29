import React from 'react'
import { Code, Gutter } from '../../src'

const CodeExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Code />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Code />

    </div>
  )
}

export default CodeExample
