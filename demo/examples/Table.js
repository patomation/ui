import React from 'react'
import { Table, Code, Gutter, Heading } from '../../src'

const TableExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Table />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Table />

    </div>
  )
}

export default TableExample
