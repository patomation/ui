import React from 'react'
import { Nav, Code, Heading } from '../../src'

const NavExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Nav>
          <div>Item1</div>
          <div>Item2</div>
          <div>Item3</div>
        </Nav>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Nav>
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
      </Nav>

    </div>
  )
}

export default NavExample
