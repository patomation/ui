import React from 'react'
import { Badge, Code, Gutter, Button, Grid, Heading } from '../../src'

const BadgeExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Badge />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Grid col={5} gap>
        <Button>
      Simple
          <Badge/>
        </Button>
        <Button>
      Icon
          <Badge icon='work' />
        </Button>
        <Button>
      Once Char
          <Badge>1</Badge>
        </Button>
        <Button>
      Two Char
          <Badge>99</Badge>
        </Button>
        <Button>
      Three Char
          <Badge>999</Badge>
        </Button>
      </Grid>

    </div>
  )
}

export default BadgeExample
