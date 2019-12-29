import React from 'react'
import { Calendar, Code, Gutter } from '../../src'

const CalendarExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Calendar />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Calendar style={{maxWidth: '600px'}} />

    </div>
  )
}

export default CalendarExample
