import React from 'react'
import { List, Code, Gutter, Heading } from '../../src'

const ListExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <List data={[
          'item 1',
          'item 2',
          'item 3',
          'item 4',
          'item 5',
        ]}/>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

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
