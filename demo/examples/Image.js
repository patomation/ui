import React from 'react'
import { Image, Code, Grid, Heading } from '../../src'

const ImageExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Image src='https://i.imgur.com/AtllrRf.jpg' square/>
        <Image src='https://i.imgur.com/AtllrRf.jpg' circle/>
        <Image src='https://i.imgur.com/AtllrRf.jpg' rectangle/>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Grid col={4} gap>
        <Image src='https://i.imgur.com/AtllrRf.jpg' square/>
        <Image src='https://i.imgur.com/AtllrRf.jpg' circle/>
      </Grid>
    </div>
  )
}

export default ImageExample
