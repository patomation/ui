import React from 'react'
import { Link, Code, Gutter } from '../../src'

const LinkExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Link />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Link />

    </div>
  )
}

export default LinkExample
