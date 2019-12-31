import React from 'react'
import { Button, Code, Grid, Heading } from '../../src'

const ButtonExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Button title='myButton' onClick={() => { /*do something*/ }}/>
        or
        <Button> Title </Button>
      `}/>

      <Heading Tag='h2'>Demo</Heading>
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
