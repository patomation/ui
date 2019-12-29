import React from 'react'
import { Header, Code, Gutter, Shape, Icon, Brand, Row } from '../../src'

const HeaderExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Header>
          <Row>
            <Icon name='keyboard_arrow_left' color='#ffffff'/>
            <Brand style={{textAlign:'center'}}>Header Stuff</Brand>
            <Icon name='menu' color='#ffffff'/>
          </Row>
        </Header>
      `}/>

      <h2>Demo</h2><Gutter/>

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
