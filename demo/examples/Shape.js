import React, { useState } from 'react'
import { Shape, Code, Gutter, Heading, Grid, Button } from '../../src'

const ShapeExample = () => {
  const [shape, setShape] = useState('square')

  const shapes = [
    'square',
    'rectangle',
    'circle',
    'triangle',
    'portrait'
  ]

  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Shape ${shape} />
      `}/>

      <Heading Tag='h2'>Demo</Heading>
      <Grid auto>
        {shapes.map(sh =>
          <Button
            key={`button-shape-${sh}`}
            enabledStyle={{
              background: 'purple'
            }}
            enabled={shape === sh}
            // background={shape === sh ? 'purple' : '#333'}
            title={sh}
            onClick={() => { setShape(sh) }} />
        )}
      </Grid>
      <Gutter />
      <Shape {...{ [shape]: true }} maxWidth='300px' background='purple'/>

    </div>
  )
}

export default ShapeExample
