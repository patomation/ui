import React from 'react'
import { GridItem, Code, Heading } from '../../src'

const GridItemExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <GridItem />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <GridItem />

    </div>
  )
}

export default GridItemExample
