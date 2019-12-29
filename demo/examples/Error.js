import React from 'react'
import { Error, Code, Gutter } from '../../src'

const ErrorExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Error>Error Message</Error>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Error>Error Message</Error>

    </div>
  )
}

export default ErrorExample
