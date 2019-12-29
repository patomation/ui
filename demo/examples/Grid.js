import React from 'react'
import { Grid, Code, Gutter, Shape } from '../../src'

const GridExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Grid col={5} gap>
          <Shape background='gold'/>
          <Shape background='gold'/>
          <Shape background='gold'/>
          <Shape background='gold'/>
          <Shape background='gold'/>
        </Grid>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Grid col={5} gap>
        <Shape background='gold'/>
        <Shape background='gold'/>
        <Shape background='gold'/>
        <Shape background='gold'/>
        <Shape background='gold'/>
      </Grid>

    </div>
  )
}

export default GridExample
