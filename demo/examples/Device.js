import React from 'react'
import { Device, Code, Gutter } from '../../src'


const DeviceExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Device />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Device />

    </div>
  )
}

export default DeviceExample
