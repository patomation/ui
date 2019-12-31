/* eslint-disable */
import React, { useState } from 'react'

import { Card, Grid, Button, Icon, Shape, Device, Center, Clickable, ActionButton, Row } from '../../src/' // eslint-disable-line

const Test = () => {
  const [clicks, setClicks] = useState(0)

  return (
    <div>
      <Device maxWidth='300px'>

        <Row>
          <Icon name='error'/>
          Error
        </Row>

        <Row>
          <Icon name='info'/>
          Info
        </Row>

        <Row>
          <Icon name='warning'/>
          Warning
        </Row>

      </Device>
    </div>
  )
}

export default Test
