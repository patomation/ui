import React from 'react'
import { Input, Code, Gutter } from '../../src'

const InputExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Input />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Input />

    </div>
  )
}

export default InputExample
