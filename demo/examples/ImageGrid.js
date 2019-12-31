import React from 'react'
import { ImageGrid, Code, Heading } from '../../src'

const ImageGridExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <ImageGrid images={[
          'https://i.imgur.com/AtllrRf.jpg',
          'https://i.imgur.com/AtllrRf.jpg',
          'https://i.imgur.com/AtllrRf.jpg',
          'https://i.imgur.com/AtllrRf.jpg',
          'https://i.imgur.com/AtllrRf.jpg',
          'https://i.imgur.com/AtllrRf.jpg',
        ]}/>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <ImageGrid images={[
        'https://i.imgur.com/AtllrRf.jpg',
        'https://i.imgur.com/AtllrRf.jpg',
        'https://i.imgur.com/AtllrRf.jpg',
        'https://i.imgur.com/AtllrRf.jpg',
        'https://i.imgur.com/AtllrRf.jpg',
        'https://i.imgur.com/AtllrRf.jpg'
      ]}/>

    </div>
  )
}

export default ImageGridExample
