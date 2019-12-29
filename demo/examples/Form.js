import React from 'react'
import { Form, Code, Gutter } from '../../src'

const FormExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Form />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Form />

    </div>
  )
}

export default FormExample
