import React from 'react'
import { Hero, Code, Gutter } from '../../src'

const HeroExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Hero />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Hero />

    </div>
  )
}

export default HeroExample
