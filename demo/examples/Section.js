import React from 'react'
import { Section, Code, Gutter, Heading } from '../../src'

const SectionExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Section>
          My Section Example
        </Section>
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Section>
        My Section Example
      </Section>

    </div>
  )
}

export default SectionExample
