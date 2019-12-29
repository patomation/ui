import React from 'react'
import { Hero, Code, Gutter, Shape, Button } from '../../src'

const HeroExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Hero
          title='Hero Header'
          description='all things hero'
          overlayColor='#333'>
          <Button kind='outline' color='#ffffff' title='Learn More' />
        </Hero>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Shape portrait background='silver' maxWidth='300px'>
        <Hero
          title='Hero Header'
          description='all things hero'
          overlayColor='#333'>
          <Button kind='outline' color='#ffffff' title='Learn More' />
        </Hero>
      </Shape>

    </div>
  )
}

export default HeroExample
