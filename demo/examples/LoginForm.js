import React from 'react'
import { LoginForm, Code, Gutter, Heading } from '../../src'

const LoginFormExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <LoginForm />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <LoginForm style={{maxWidth: '400px'}} />

    </div>
  )
}

export default LoginFormExample
