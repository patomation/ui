import React from 'react'
import { LoginForm, Code, Gutter } from '../../src'

const LoginFormExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <LoginForm />
      `}/>

      <h2>Demo</h2><Gutter/>

      <LoginForm style={{maxWidth: '400px'}} />

    </div>
  )
}

export default LoginFormExample
