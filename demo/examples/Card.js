import React from 'react'
import { Card, Code, Gutter } from '../../src'

const CardExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Card />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Card />

    </div>
  )
}

export default CardExample
