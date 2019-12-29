import React from 'react'
import { Form, Code, Gutter } from '../../src'

const FormExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Form
          style={{maxWidth: '400px'}}
          labels={true}
          fields={[
            {
              name: 'First Name',
              value: '',
              required: true
            },
            {
              name: 'Last Name',
              value: '',
              required: true
            },
            {
              name: 'Email',
              value: '',
              required: true
            },
            {
              name: 'Message',
              value: '',
              required: false,
              type: 'textarea'
            }
          ]}/>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Form
        style={{maxWidth: '400px'}}
        labels={true}
        fields={[
          {
            name: 'First Name',
            value: '',
            required: true
          },
          {
            name: 'Last Name',
            value: '',
            required: true
          },
          {
            name: 'Email',
            value: '',
            required: true
          },
          {
            name: 'Message',
            value: '',
            required: false,
            type: 'textarea'
          }
        ]}/>

    </div>
  )
}

export default FormExample
