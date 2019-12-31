import React from 'react'
import { Carousel, Image, Code, Heading } from '../../src'

const CarouselExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Carousel style={{maxWidth: '800px'}}>
          <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
          <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
          <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
        </Carousel>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Carousel style={{ maxWidth: '800px' }}>
        <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
        <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
        <Image rectangle src='http://patomation.github.io/assets/images/Patrick-Profile-Picture-1.png' />
      </Carousel>

    </div>
  )
}

export default CarouselExample
