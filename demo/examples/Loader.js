import React, { useState } from 'react'
import { Loader, Code, Gutter, Shape, Button, Input, Grid } from '../../src'

const LoaderExample = () => {
  const [ message, setMessage ] = useState('Loading ...')
  const [ spinner, setSpinner ] = useState(true)
  const [ progressBar, setProgressBar ] = useState(true)
  const [ complete, setComplete ] = useState(false)
  const [ color, setColor ] = useState('green')

  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Loader />
      `}/>

      <h2>Demo</h2><Gutter/>
      <Grid col={5} gap>
        <Button title='Progress Bar' onClick={() => { setProgressBar(!progressBar) }} />
        <Button title='Complete' onClick={() => { setComplete(true) }} />
        <Button title='Spinner' onClick={() => { setSpinner(!spinner) }} />
        <Input value={message} onChange={(e) => {setMessage(e.target.value)}} style={{display: 'inline'}}/>
        <Input value={color} onChange={(e) => {setColor(e.target.value)}} style={{display: 'inline'}}/>
      </Grid><Gutter />

      <Shape portrait background='silver' maxWidth='300px'>
        <Loader
          spinner={spinner}
          progressBarColor={color}
          progressBarTime={50}
          progressBar={progressBar}
          complete={complete}
          message={message} />
      </Shape>

    </div>
  )
}

export default LoaderExample
