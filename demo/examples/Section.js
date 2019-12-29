import React from 'react'
import { Section, Code, Gutter } from '../../src'

const SectionExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Section>
          My Section Example
        </Section>
      `}/>

      <h2>Demo</h2><Gutter/>

      <Section>
        My Section Example
      </Section>

    </div>
  )
}

export default SectionExample
