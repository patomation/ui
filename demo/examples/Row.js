import React from 'react'
import { Row, Code, Gutter, Icon, Brand } from '../../src'

const RowExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Row>
          <Brand> Awesome </Brand>
          Stuff In A Row
          <Icon name='work' />
          More Stuff
          <Icon name='menu' />
          More stuff
          <Brand> Awesome </Brand>
        </Row>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Row>
        <Brand> Awesome </Brand>
        Stuff In A Row
        <Icon name='work' />
        More Stuff
        <Icon name='menu' />
        More stuff
      </Row>

    </div>
  )
}

export default RowExample
