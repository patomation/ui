import React from 'react'
import { List, Code, Gutter } from '../../src'

const ListExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <List />
      `}/>

      <h2>Demo</h2><Gutter/>

      <List />

    </div>
  )
}

export default ListExample
