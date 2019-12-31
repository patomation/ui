import React, { useState } from 'react'
import { Collapse, Code, Gutter, Grid, Shape, Button, Heading } from '../../src'

const CollapseExample = () => {

  const [ collapse, setCollapse ] = useState(false)
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
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

      <Heading Tag='h2'>Demo</Heading>
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
