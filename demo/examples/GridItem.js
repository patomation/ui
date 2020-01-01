import React from 'react'
import { Grid, GridItem, Code, Heading, Shape, Center } from '../../src'

const GridItemExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Grid col={2} gap>

          <div>Item One</div>

          <div>Item Two</div>

          <GridItem span={2}>
            <div>
              Item Three
            </div>
          </GridItem>

        </Grid>
      `}/>

      <Heading Tag='h2'>Demo</Heading>
      <Grid col={2} gap style={{
        textAlign: 'center',
        color: '#ffffff'
      }}>
        <div style={{background: 'orange', padding: '1rem'}}>Item One</div>
        <div style={{background: 'red', padding: '1rem'}}>Item Two</div>
        <GridItem span={2}>
          <div style={{background: 'purple', padding: '1rem'}}>
            Item Three (Grid item with span 2)
          </div>
        </GridItem>
      </Grid>

    </div>
  )
}

export default GridItemExample
