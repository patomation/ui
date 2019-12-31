import React from 'react'
import { Tabs, Code, Gutter, Heading } from '../../src'

const TabsExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Tabs />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Tabs />

    </div>
  )
}

export default TabsExample
