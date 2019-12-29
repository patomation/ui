import React, { useState } from 'react'
import { IconButton, Code, Gutter, Badge } from '../../src'

const IconButtonExample = () => {
  const [ clicks, setClicks ] = useState(0)

  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <IconButton icon='work' title='Get Shit Done' onClick={()=>{alert('NICE')}}/>
      `}/>

      <h2>Demo</h2><Gutter/>

      <IconButton icon='work'  badge={clicks} title='Get Shit Done' onClick={() => {setClicks(clicks+1)}}/>
      <Gutter/>

      <IconButton icon='add_alert' badge={clicks} onClick={() => {setClicks(clicks+1)}} />
    </div>
  )
}

export default IconButtonExample
