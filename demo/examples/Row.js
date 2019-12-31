import React from 'react'
import { Row, Code, Icon, Brand, Heading } from '../../src'

const RowExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
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

      <Heading Tag='h2'>Demo</Heading>

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
