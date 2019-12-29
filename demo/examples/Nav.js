import React from 'react'
import { Nav, Code, Gutter } from '../../src'

const NavExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Nav />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Nav />

    </div>
  )
}

export default NavExample
