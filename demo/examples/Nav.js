import React from 'react'
import { Nav, Code, Gutter } from '../../src'

const NavExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Nav>
          <div>Item1</div>
          <div>Item2</div>
          <div>Item3</div>
        </Nav>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Nav>
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
      </Nav>

    </div>
  )
}

export default NavExample
