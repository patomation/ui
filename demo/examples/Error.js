import React from 'react'
import { Error, Code, Gutter } from '../../src'

const ErrorExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Error />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Error />

    </div>
  )
}

export default ErrorExample
