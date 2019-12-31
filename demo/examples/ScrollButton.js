import React from 'react'
import { ScrollButton, Code, Heading } from '../../src'

const ScrollButtonExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <ScrollButton />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <ScrollButton />

    </div>
  )
}

export default ScrollButtonExample
