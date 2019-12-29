import React from 'react'
import { IconButton, Code, Gutter } from '../../src'

const IconButtonExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <IconButton />
      `}/>

      <h2>Demo</h2><Gutter/>

      <IconButton />

    </div>
  )
}

export default IconButtonExample
