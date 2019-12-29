import React, { useState } from 'react'
import { Modal, Code, Gutter, Button } from '../../src'

const ModalExample = () => {
  const [ show, setShow ] = useState(false)

  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        const [ show, setShow ] = useState(false)

        <Button title='show' onClick={() => {setShow(!show)}}/>
        <Modal show={show} onClose={() => {setShow(false)}}>
          This is the modal
        </Modal>
      `}/>

      <h2>Demo</h2><Gutter/>
      <Button title='show' onClick={() => {setShow(!show)}}/>
      <Modal show={show} onClose={() => {setShow(false)}}>
        This is the modal
      </Modal>

    </div>
  )
}

export default ModalExample
