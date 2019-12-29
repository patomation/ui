import React from 'react'
import { Row, Code, Gutter } from '../../src'

const RowExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Row />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Row />

    </div>
  )
}

export default RowExample
