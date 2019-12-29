import React from 'react'
import { List, Code, Gutter } from '../../src'

const ListExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <List data={[
          'item 1',
          'item 2',
          'item 3',
          'item 4',
          'item 5',
        ]}/>
      `}/>

      <h2>Demo</h2><Gutter/>

      <List data={[
        'item 1',
        'item 2',
        'item 3',
        'item 4',
        'item 5',
      ]}/>

    </div>
  )
}

export default ListExample
