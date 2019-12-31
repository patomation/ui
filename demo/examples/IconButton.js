import React, { useState } from 'react'
import { IconButton, Code, Gutter, Heading } from '../../src'

const IconButtonExample = () => {
  const [clicks, setClicks] = useState(0)

  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <IconButton icon='work' title='Get Shit Done' onClick={()=>{alert('NICE')}}/>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <IconButton icon='work' badge={clicks} title='Get Shit Done' onClick={() => { setClicks(clicks + 1) }}/>
      <Gutter/>

      <IconButton icon='add_alert' badge={clicks} onClick={() => { setClicks(clicks + 1) }} />
    </div>
  )
}

export default IconButtonExample
