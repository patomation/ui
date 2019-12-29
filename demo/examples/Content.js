import React from 'react'
import { Content, Code, Gutter } from '../../src'

const ContentExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Content />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Content />

    </div>
  )
}

export default ContentExample
