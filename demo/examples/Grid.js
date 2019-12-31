import React from 'react'
import { Grid, Code, Gutter, Shape, Heading } from '../../src'

const GridExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Grid col={5} gap>
          <Shape background='gold'/>
          <Shape background='gold'/>
          <Shape background='gold'/>
          <Shape background='gold'/>
          <Shape background='gold'/>
        </Grid>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

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
