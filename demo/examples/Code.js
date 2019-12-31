import React from 'react'
import { Code, Gutter, Heading } from '../../src'

const CodeExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Code block={\`
          const CoolFunction = () => {
            //my cool function
          }
        \`}>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Code block={`
        const CoolFunction = () => {
          //my cool function
        }
      `}/>

    </div>
  )
}

export default CodeExample
