import React from 'react'
import { Loader, Code, Gutter } from '../../src'

const LoaderExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Loader />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Loader />

    </div>
  )
}

export default LoaderExample
