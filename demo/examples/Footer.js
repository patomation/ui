import React from 'react'
import { Footer, Code, Gutter, Shape } from '../../src'

const FooterExample = () => {
  return (
    <div>
      <h2>Example</h2>
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

      <h2>Demo</h2><Gutter/>

      <Shape portrait background='silver' maxWidth='300px'>
        <Footer style={{position:'absolute', bottom: '0', width: '100%', boxSizing: 'border-box'}}>Footer Items</Footer>
      </Shape>

    </div>
  )
}

export default FooterExample
