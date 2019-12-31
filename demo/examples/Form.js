import React from 'react'
import { Form, Code, Heading } from '../../src'

const FormExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
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

      <Heading Tag='h2'>Demo</Heading>

      <Form
        style={{ maxWidth: '400px' }}
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
