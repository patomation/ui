import React from 'react'
import { Icon, Code, Gutter, Heading } from '../../src'

const IconExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Icon name='work'/>

        <Icon name='work' responsive style={{width:'300px'}}/>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      Regular:
      <Icon name='work'/>
      <Gutter/>
      Responsive:
      <Icon name='work' responsive style={{ width: '300px' }}/>

    </div>
  )
}

export default IconExample
