import React from 'react'
import { User, Code, Heading } from '../../src'

const UserExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <User />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <User />

    </div>
  )
}

export default UserExample
