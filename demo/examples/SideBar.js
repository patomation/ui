import React from 'react'
import { SideBar, Code, Gutter, Heading } from '../../src'

const SideBarExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <SideBar />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <SideBar />

    </div>
  )
}

export default SideBarExample
