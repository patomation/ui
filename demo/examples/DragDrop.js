import React from 'react'
import { DragDrop, Code, Gutter } from '../../src'

const DragDropExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <DragDrop />
      `}/>

      <h2>Demo</h2><Gutter/>

      <DragDrop />

    </div>
  )
}

export default DragDropExample
