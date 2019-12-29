import React from 'react'
import { Code, Gutter } from '../../src'

const CodeExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Code block={\`
          const CoolFunction = () => {
            //my cool function
          }
        \`}>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Code block={`
        const CoolFunction = () => {
          //my cool function
        }
      `}/>

    </div>
  )
}

export default CodeExample
