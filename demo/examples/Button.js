import React from 'react'
import { Button, Code, Gutter } from '../../src'

const ButtonExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Button />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Button />

    </div>
  )
}

export default ButtonExample
