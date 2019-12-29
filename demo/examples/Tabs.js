import React from 'react'
import { Tabs, Code, Gutter } from '../../src'

const TabsExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Tabs />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Tabs />

    </div>
  )
}

export default TabsExample
