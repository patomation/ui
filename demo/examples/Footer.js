import React from 'react'
import { Footer, Code, Gutter, Shape, Heading } from '../../src'

const FooterExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Footer
          style={{
            position:'absolute',
            bottom: '0',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            Footer Items
        </Footer>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Shape portrait background='silver' maxWidth='300px'>
        <Footer style={{position:'absolute', bottom: '0', width: '100%', boxSizing: 'border-box'}}>Footer Items</Footer>
      </Shape>

    </div>
  )
}

export default FooterExample
