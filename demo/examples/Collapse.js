import React, { useState } from 'react'
import { Collapse, Code, Gutter, Grid, Shape, Button } from '../../src'

const CollapseExample = () => {

  const [ collapse, setCollapse ] = useState(false)
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        const [ collapse, setCollapse ] = useState(false)

        <Button title={ collapse ? 'Show' : 'Collapse' } onClick={()=>{setCollapse(!collapse)}}/>
        <Collapse collapse={collapse}>
          <Grid col={3} gap>
            <Shape circle background='orange'/>
            <Shape square background='purple'/>
            <Shape triangle background='gold'/>
          </Grid>
        </Collapse>

      `}/>

      <h2>Demo</h2><Gutter/>
      <Button title={ collapse ? 'Show' : 'Collapse' } onClick={()=>{setCollapse(!collapse)}}/>
      <Collapse collapse={collapse}>
        <Grid col={3} gap>
          <Shape circle background='orange'/>
          <Shape square background='purple'/>
          <Shape triangle background='gold'/>
        </Grid>
      </Collapse>

    </div>
  )
}

export default CollapseExample
