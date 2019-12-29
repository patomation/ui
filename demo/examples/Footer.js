import React from 'react'
import { Footer, Code, Gutter } from '../../src'

const FooterExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Footer />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Footer />

    </div>
  )
}

export default FooterExample
