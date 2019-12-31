import React from 'react'
import { Panel, Code, Grid, Heading } from '../../src'

const PanelExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Panel> Basic Panel </Panel>
        <Panel header='With a header'>Nice</Panel>
      `}/>

      <Heading Tag='h2'>Demo</Heading>
      <Grid col={2}>
        <Panel> Basic Panel </Panel>
        <Panel header='With a header'>Nice</Panel>
      </Grid>
    </div>
  )
}

export default PanelExample
