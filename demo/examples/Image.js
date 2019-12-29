import React from 'react'
import { Image, Code, Gutter } from '../../src'

const ImageExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Image />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Image />

    </div>
  )
}

export default ImageExample
