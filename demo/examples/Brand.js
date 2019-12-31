import React from 'react'
import { Brand, Code, Heading } from '../../src'

const BrandExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Brand> Hekin Sweet Brand </Brand>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Brand> Hekin Sweet Brand </Brand>

    </div>
  )
}

export default BrandExample
