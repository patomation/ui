import React from 'react'
import { Card, Code, Grid, Button, Icon, Heading } from '../../src'

const CardExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Grid col={4} gap style={{ padding: '1rem' }}>
          <a href='/' style={{ display: 'flex' }}>
            <Card
              icon='work'
              title='Motor Bikes'
              description='everything you would want to know about them.'
              clickable={true}/>
          </a>
          <Card
            title='Lammas'
            description='there everywhere'
            onClick={() => { console.log('nice') }}
            image='https://i.imgur.com/AtllrRf.jpg' />
          <Card footer={<Button title='Nice' center/>}/>
          <Card icon={<Icon name='favorite' iconBackground='red' />}>
            <Button title='Cool Logo' right/>
          </Card>
        </Grid>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Grid col={4} gap style={{ padding: '1rem' }}>
        <a href='/' style={{ display: 'flex' }}>
          <Card
            icon='work'
            title='Motor Bikes'
            description='everything you would want to know about them.'
            clickable={true}/>
        </a>
        <Card
          title='Lammas'
          description='there everywhere'
          onClick={() => { console.log('nice') }}
          image='https://i.imgur.com/AtllrRf.jpg' />
        <Card footer={<Button title='Nice' center/>}/>
        <Card icon={<Icon name='favorite' iconBackground='red' />}>
          <Button title='Cool Logo' right/>
        </Card>
      </Grid>

    </div>
  )
}

export default CardExample
