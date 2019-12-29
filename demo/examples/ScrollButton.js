import React from 'react'
import { ScrollButton, Code, Gutter } from '../../src'

const ScrollButtonExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <ScrollButton />
      `}/>

      <h2>Demo</h2><Gutter/>

      <ScrollButton />

    </div>
  )
}

export default ScrollButtonExample
