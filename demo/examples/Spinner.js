import React from 'react'
import { Spinner, Code, Heading } from '../../src'

const SpinnerExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Spinner />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Spinner />

    </div>
  )
}

export default SpinnerExample
