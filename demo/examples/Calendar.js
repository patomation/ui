import React from 'react'
import { Calendar, Code, Heading } from '../../src'

const CalendarExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Calendar />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Calendar style={{ maxWidth: '600px' }} />

    </div>
  )
}

export default CalendarExample
