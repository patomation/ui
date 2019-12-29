import React from 'react'
import { Spinner, Code, Gutter } from '../../src'

const SpinnerExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Spinner />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Spinner />

    </div>
  )
}

export default SpinnerExample
