import React from 'react'
import { Carousel, Image, Code, Gutter } from '../../src'

const CarouselExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Carousel style={{maxWidth: '800px'}}>
          <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
          <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
          <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
        </Carousel>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Carousel style={{maxWidth: '800px'}}>
        <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
        <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
        <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
      </Carousel>

    </div>
  )
}

export default CarouselExample
