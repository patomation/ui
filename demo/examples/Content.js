import React from 'react'
import { Content, Code, Heading } from '../../src'

const ContentExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Content />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Content />

    </div>
  )
}

export default ContentExample
