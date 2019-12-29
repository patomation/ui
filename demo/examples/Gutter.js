import React from 'react'
import { Gutter, Code, Grid } from '../../src'

const GutterExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <div>Item One</div>
        <Gutter />
        <div>Item Two</div>

        <div>Item Three</div>
        <Gutter vertical/>
        <div>Item Four</div>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Grid col={2} gap='3rem'>
        <div>
          <div style={{background: '#333', color: '#ffffff', padding:'1rem'}} >Item One</div>
          <div style={{color:'silver'}}>[gutter spacing]</div>
          <div style={{background: '#333', color: '#ffffff', padding:'1rem'}} >Item Two</div>
        </div>

        <div>
          <span style={{background: '#333', color: '#ffffff', padding:'1rem'}} >Item Three</span>
          <Gutter vertical />
          <span style={{background: '#333', color: '#ffffff', padding:'1rem'}} >Item Four</span>
        </div>
      </Grid>
    </div>
  )
}

export default GutterExample
