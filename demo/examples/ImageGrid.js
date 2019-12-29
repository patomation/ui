import React from 'react'
import { ImageGrid, Code, Gutter } from '../../src'

const ImageGridExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <ImageGrid />
      `}/>

      <h2>Demo</h2><Gutter/>

      <ImageGrid />

    </div>
  )
}

export default ImageGridExample
