import React from 'react'
import { Grid, Code, Gutter } from '../../src'

const GridExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Grid />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Grid />

    </div>
  )
}

export default GridExample
