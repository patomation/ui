import React from 'react'
import { Hr, Code, Gutter, Heading } from '../../src'

const HrExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Hr />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Hr />

    </div>
  )
}

export default HrExample
