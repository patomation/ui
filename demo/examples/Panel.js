import React from 'react'
import { Panel, Code, Gutter, Grid } from '../../src'

const PanelExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Panel> Basic Panel </Panel>
        <Panel header='With a header'>Nice</Panel>
      `}/>

      <h2>Demo</h2><Gutter/>
      <Grid col={2}>
        <Panel> Basic Panel </Panel>
        <Panel header='With a header'>Nice</Panel>
      </Grid>
    </div>
  )
}

export default PanelExample
