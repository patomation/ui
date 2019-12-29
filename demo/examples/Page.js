import React from 'react'
import { Page, Code, Gutter } from '../../src'

const PageExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Page />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Page />

    </div>
  )
}

export default PageExample
