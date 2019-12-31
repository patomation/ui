import React from 'react'
import { Center, Code, Gutter, Shape, Heading } from '../../src'

const CenterExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Shape rectangle background='#333'>

          <Center>
            <Shape maxWidth='200px' background='gold'/>
          </Center>

        </Shape>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Shape rectangle background='#333'>

        <Center>
          <Shape maxWidth='200px' background='gold'/>
        </Center>

      </Shape>

    </div>
  )
}

export default CenterExample
