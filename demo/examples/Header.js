import React from 'react'
import { Header, Code, Gutter } from '../../src'

const HeaderExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Header />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Header />

    </div>
  )
}

export default HeaderExample
