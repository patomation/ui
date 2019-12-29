import React from 'react'
import { Select, Code, Gutter } from '../../src'

const SelectExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Select />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Select />

    </div>
  )
}

export default SelectExample
