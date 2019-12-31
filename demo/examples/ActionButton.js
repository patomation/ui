import React, { useState } from 'react'
import { ActionButton, Code, Gutter, Device, Center, Grid, Input, Heading } from '../../src'

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: (e) => {
      setValue(e.target.value)
    }
  }
}

const ActionButtonExample = () => {
  const [clicks, setClicks] = useState(0)
  const color = useInput('#000000')
  const background = useInput('gold')

  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <ActionButton />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Device maxWidth='300px'>
        <Center style={{ textAlign: 'center' }}>
          Click: {clicks}
        </Center>

        <ActionButton
          color={color.value}
          background={background.value}
          onClick={() => { setClicks(clicks + 1) }} />

      </Device>

      <Gutter/>
      <Grid auto>
        <Input {...background} label='Background' />
        <Input {...color} label='Color' />
      </Grid>

    </div>
  )
}

export default ActionButtonExample
