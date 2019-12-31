import React from 'react'
import { Error, Code, Heading } from '../../src'

const ErrorExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Error>Error Message</Error>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Error>Error Message</Error>

    </div>
  )
}

export default ErrorExample
