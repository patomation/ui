import React from 'react'
import { Icon, Code, Gutter } from '../../src'

const IconExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Icon name='work'/>

        <Icon name='work' responsive style={{width:'300px'}}/>
      `}/>

      <h2>Demo</h2><Gutter/>

      Regular:
      <Icon name='work'/>
      <Gutter/>
      Responsive:
      <Icon name='work' responsive style={{width:'300px'}}/>

    </div>
  )
}

export default IconExample
