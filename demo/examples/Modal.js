import React, { useState } from 'react'
import { Modal, Code, Button, Heading } from '../../src'

const ModalExample = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        const [ show, setShow ] = useState(false)

        <Button title='show' onClick={() => {setShow(!show)}}/>
        <Modal show={show} onClose={() => {setShow(false)}}>
          This is the modal
        </Modal>
      `}/>

      <Heading Tag='h2'>Demo</Heading>
      <Button title='show' onClick={() => { setShow(!show) }}/>
      <Modal show={show} onClose={() => { setShow(false) }}>
        This is the modal
      </Modal>

    </div>
  )
}

export default ModalExample
