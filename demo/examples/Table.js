import React from 'react'
import { Table, Code, Gutter } from '../../src'

const TableExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Table />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Table />

    </div>
  )
}

export default TableExample
