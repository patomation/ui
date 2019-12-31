import React from 'react'
import { Placeholder, Code, Gutter, Heading } from '../../src'


const PlaceholderExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Placeholder />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Placeholder />

    </div>
  )
}

export default PlaceholderExample
