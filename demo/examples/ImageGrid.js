import React from 'react'
import { ImageGrid, Code, Gutter } from '../../src'

const ImageGridExample = () => {
  return (
    <div>
      <h2>Example</h2>
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

      <h2>Demo</h2><Gutter/>

      <ImageGrid images={[
        'https://i.imgur.com/AtllrRf.jpg',
        'https://i.imgur.com/AtllrRf.jpg',
        'https://i.imgur.com/AtllrRf.jpg',
        'https://i.imgur.com/AtllrRf.jpg',
        'https://i.imgur.com/AtllrRf.jpg',
        'https://i.imgur.com/AtllrRf.jpg',
      ]}/>

    </div>
  )
}

export default ImageGridExample
