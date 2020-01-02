import React from 'react'
import {
  Heading, Code, Gutter, IconButton,
  Alert, Grid, List, Panel, Card, Center, Skeleton
} from '../../src'
import doc from '../doc.json'
import docCoverage from '../modules/docCoverage'

const Home = () =>
  <div>

    <p style={{ lineHeight: '1.5rem' }}>
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
  It's as simple as that
    </p>
    <Gutter/>

    <Heading Tag='h4'>Information</Heading>

    <Grid auto>
      <Card
        icon='assessment'
        closeable={false}
        color='#333'
        title='Documentation'>

          <h1>{docCoverage(doc).coverage}</h1>

      </Card>
      <Card
        icon='flag'
        closeable={false}
        color='#333'
        title='Test Coverage'>

          <Grid col={2}>
            <p>Stms:</p> <p>91%</p>
            <p>Branch:</p> <p>75%</p>
            <p>Funcs:</p> <p>83%</p>
            <p>Lines:</p> <p>92%</p>
          </Grid>

      </Card>

    </Grid>

    <Gutter/>

    <a href='https://github.com/patomation/ui' rel='noopener noreferrer' target='_blank'><IconButton name='star' title='View on Github'/></a>

  </div>

export default Home
