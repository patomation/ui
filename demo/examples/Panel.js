import React from 'react'
import { Panel, Code, Gutter } from '../../src'

const PanelExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Panel />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Panel />

    </div>
  )
}

export default PanelExample
