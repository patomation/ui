import React from 'react'
import { Placeholder, Code, Gutter } from '../../src'


const PlaceholderExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Placeholder />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Placeholder />

    </div>
  )
}

export default PlaceholderExample
