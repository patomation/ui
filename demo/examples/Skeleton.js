import React from 'react'
import { Skeleton, Code, Heading } from '../../src'

const SkeletonExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Skeleton lines={5} />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Skeleton lines={5} />

    </div>
  )
}

export default SkeletonExample
