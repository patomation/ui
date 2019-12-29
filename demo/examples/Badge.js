import React from 'react'
import { Badge, Code, Gutter, Button, Grid } from '../../src'

const BadgeExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Badge />
      `}/>

      <h2>Demo</h2><Gutter/>

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
