import React from 'react'
import { Alert, Code, Heading } from '../../src'

const AlertExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Alert
          title='Success Message'
          type='success'
          icon={true}
          closeabe={true}
          >
          Nice Job
        </Alert>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Alert type='success' title='Success Message'>Nice Job</Alert>
      <Alert type='info'>Info Message</Alert>
      <Alert type='error' closeable={false}>Error Message</Alert>
      <Alert type='warning'>Warning Message</Alert>
      <Alert icon='work' type='success' title='Bob Ross'>
        {`
          Just relax and let it flow. That easy.
          Let's build some happy little clouds up here.
          And maybe a little bush lives there.
          And right there you got an almighty cloud.
          In your imagination you can go anywhere you want.
          Work on one thing at a time.
          Don't get carried away - we have plenty of time.
        `}
      </Alert>

    </div>
  )
}

export default AlertExample
