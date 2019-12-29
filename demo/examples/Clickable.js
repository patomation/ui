import React from 'react'
import { Clickable, Code, Gutter, Grid, Image } from '../../src'

const ClickableExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Clickable onClick={() => { alert('NICE') }}>
          Clickable
          <Image square src='https://i.imgur.com/AtllrRf.jpg'/>
        </Clickable>
      `}/>

      <h2>Demo</h2><Gutter/>
      <Grid col={2} gap>
        <Clickable onClick={() => { alert('NICE') }}>
          Clickable
          <Image square src='https://i.imgur.com/AtllrRf.jpg'/>
        </Clickable>
        <div>
          Not clickable
          <Image square src='https://i.imgur.com/AtllrRf.jpg'/>
        </div>
      </Grid>
    </div>
  )
}

export default ClickableExample
