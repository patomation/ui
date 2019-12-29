import React from 'react'
import { Center, Code, Gutter, Shape } from '../../src'

const CenterExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Shape rectangle background='#333'>

          <Center>
            <Shape maxWidth='200px' background='gold'/>
          </Center>

        </Shape>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Shape rectangle background='#333'>

        <Center>
          <Shape maxWidth='200px' background='gold'/>
        </Center>

      </Shape>

    </div>
  )
}

export default CenterExample
