import React from 'react'
import { RegisterForm, Code, Heading } from '../../src'

const RegisterFormExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <RegisterForm />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <RegisterForm style={{ maxWidth: '400px' }} />

    </div>
  )
}

export default RegisterFormExample
