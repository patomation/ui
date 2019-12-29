import React from 'react'
import { SideBar, Code, Gutter } from '../../src'

const SideBarExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <SideBar />
      `}/>

      <h2>Demo</h2><Gutter/>

      <SideBar />

    </div>
  )
}

export default SideBarExample
