import React from 'react'
import { Image, Code, Gutter, Grid } from '../../src'

const ImageExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Image src='https://i.imgur.com/AtllrRf.jpg' square/>
        <Image src='https://i.imgur.com/AtllrRf.jpg' circle/>
        <Image src='https://i.imgur.com/AtllrRf.jpg' rectangle/>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Grid col={4} gap>
        <Image src='https://i.imgur.com/AtllrRf.jpg' square/>
        <Image src='https://i.imgur.com/AtllrRf.jpg' circle/>
      </Grid>
    </div>
  )
}

export default ImageExample
