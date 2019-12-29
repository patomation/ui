import React from 'react'
import { Button, Code, Gutter, Grid } from '../../src'

const ButtonExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Button title='myButton' onClick={() => { /*do something*/ }}/>
        or
        <Button> Title </Button>
      `}/>

      <h2>Demo</h2><Gutter/>
      <Grid col={5} gap>
        <Button title='Regular' onClick={() => { alert('click') }}/>
        <Button kind='outline' title='Outline' onClick={() => { alert('click') }}/>
        <Button kind='none' title='Text Only' onClick={() => { alert('click') }}/>
        <Button disabled title='Disabled' onClick={() => { alert('click') }}/>
        <Button enabled title='Enabled' onClick={() => { alert('click') }}/>
      </Grid>
    </div>
  )
}

export default ButtonExample
