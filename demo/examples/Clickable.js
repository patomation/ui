import React from 'react'
import { Clickable, Code, Gutter, Grid, Image, Heading } from '../../src'

const ClickableExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Clickable onClick={() => { alert('NICE') }}>
          Clickable
          <Image square src='https://i.imgur.com/AtllrRf.jpg'/>
        </Clickable>
      `}/>

      <Heading Tag='h2'>Demo</Heading>
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
