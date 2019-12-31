import React from 'react'
import { Heading, Code, Grid } from '../../src'

const HeadingExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Heading Tag='h1'>Heading 1</Heading>
        <Heading Tag='h2'>Heading 2</Heading>
        <Heading Tag='h3'>Heading 3</Heading>
        <Heading Tag='h4'>Heading 4</Heading>
        <Heading Tag='h5'>Heading 5</Heading>
        <Heading Tag='h6'>Heading 6</Heading>
      `}/>

      <Heading Tag='h2'>Demo</Heading>
      <Grid gap>
        <Heading Tag='h1'>Heading 1</Heading>
        <Heading Tag='h2'>Heading 2</Heading>
        <Heading Tag='h3'>Heading 3</Heading>
        <Heading Tag='h4'>Heading 4</Heading>
        <Heading Tag='h5'>Heading 5</Heading>
        <Heading Tag='h6'>Heading 6</Heading>
      </Grid>
    </div>
  )
}

export default HeadingExample
