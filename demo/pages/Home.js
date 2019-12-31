import React from 'react'
import { Heading, Code, Gutter, IconButton } from '../../src'
const Home = () =>
<div>

<p style={{lineHeight: '1.5rem'}}>
  A React js UI component library using material design principles.
  Includes all the building blocks to build a Gatsby website or a regular web app.
  Inline styles used but classes are available to override things.
  A config file exists for customizing global sizes and colors.
  Tested and linted JavaScript goodness.
</p>

<Heading Tag='h4'>Installation</Heading>
<Code block={`

  yarn add @patomation/ui

  or

  npm install @patomation/ui --save

`}/>

<Heading Tag='h4'>Usage</Heading>
<p>
  Using es6 imports you can easily import any of the components.
</p><Gutter/>

<Code block={`

  import { Button } from '@patomation/ui'

  <Button>My button</Button>

`}/><Gutter/>

<p>
  Its as simple as that
</p>
<Gutter/>

<a href='https://github.com/patomation/ui' target='_blank'><IconButton name='star' title='View on Github'/></a>


</div>

export default Home
