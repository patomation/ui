import React from 'react'
import { Clickable, Code, Gutter } from '../../src'

const ClickableExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Clickable />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Clickable />

    </div>
  )
}

export default ClickableExample
