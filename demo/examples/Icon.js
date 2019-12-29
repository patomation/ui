import React from 'react'
import { Icon, Code, Gutter } from '../../src'

const IconExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Icon />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Icon />

    </div>
  )
}

export default IconExample
