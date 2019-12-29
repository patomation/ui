import React from 'react'
import { User, Code, Gutter } from '../../src'

const UserExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <User />
      `}/>

      <h2>Demo</h2><Gutter/>

      <User />

    </div>
  )
}

export default UserExample
