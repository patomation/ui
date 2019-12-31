import React from 'react'
import { Link, Code, Gutter, Heading } from '../../src'

const LinkExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Link />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Link />

    </div>
  )
}

export default LinkExample
