import React from 'react'
import { Center, Code, Gutter } from '../../src'

const CenterExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Center />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Center />

    </div>
  )
}

export default CenterExample
