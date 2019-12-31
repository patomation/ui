import React from 'react'
import { Header, Code, Gutter, Shape, Icon, Brand, Row, Heading } from '../../src'

const HeaderExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Header>
          <Row>
            <Icon name='keyboard_arrow_left' color='#ffffff'/>
            <Brand style={{textAlign:'center'}}>Header Stuff</Brand>
            <Icon name='menu' color='#ffffff'/>
          </Row>
        </Header>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Shape portrait background='silver' maxWidth='300px'>
        <Header>
          <Row>
            <Icon name='keyboard_arrow_left' color='#ffffff'/>
            <Brand style={{textAlign:'center'}}>Header Stuff</Brand>
            <Icon name='menu' color='#ffffff'/>
          </Row>
        </Header>
      </Shape>

    </div>
  )
}

export default HeaderExample
