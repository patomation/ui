import React from 'react'
import { Modal, Code, Gutter } from '../../src'

const ModalExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Modal />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Modal />

    </div>
  )
}

export default ModalExample
