import React from 'react'
import { Hr, Code, Gutter } from '../../src'

const HrExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Hr />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Hr />

    </div>
  )
}

export default HrExample
