import React from 'react'
import { Hero, Code, Shape, Button, Heading } from '../../src'

const HeroExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Hero
          title='Hero Header'
          description='all things hero'
          overlayColor='#333'>
          <Button kind='outline' color='#ffffff' title='Learn More' />
        </Hero>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

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
