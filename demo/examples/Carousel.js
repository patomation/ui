import React from 'react'
import { Carousel, Code, Gutter } from '../../src'

const CarouselExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Carousel />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Carousel />

    </div>
  )
}

export default CarouselExample
