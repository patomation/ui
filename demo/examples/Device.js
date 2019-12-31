import React from 'react'
import { Device, Code, Gutter, Heading } from '../../src'


const DeviceExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Device />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Device />

    </div>
  )
}

export default DeviceExample
