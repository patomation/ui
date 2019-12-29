import React from 'react'
import { Heading, Code, Gutter } from '../../src'

const HeadingExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Heading />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Heading />

    </div>
  )
}

export default HeadingExample
