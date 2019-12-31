import React from 'react'
import { Select, Code, Gutter, Heading } from '../../src'

const SelectExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Select />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Select />

    </div>
  )
}

export default SelectExample
